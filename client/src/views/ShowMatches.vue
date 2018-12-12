<template>
    <div id="show-matches">
        <h1 id="container-title">Scores</h1>
        <ul>
            <h3 id="warning" v-if="!matches.length > 0">No match added yet.</h3>
            <li v-else v-for="match in matches">
                <div class="player-column" :class="getStatusForTeam(match.team_a_score, match.team_b_score)">
                    <h3>{{ match.team_a }}</h3>
                    <h3>{{ match.team_a_score }}</h3>
                </div>
                <div class="player-column" :class="getStatusForTeam(match.team_b_score, match.team_a_score)">
                    <h3>{{ match.team_b_score }}</h3>
                    <h3>{{ match.team_b }}</h3>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ShowMatches",
        data() {
            return {
                matches: [],
                status: 0
            }
        },
        mounted() {
            fetch("http://localhost:5050/scores", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => response.json())
                .then(res => {
                    res.forEach((match) => {
                        this.matches.push({
                            "team_a": match['team_a'],
                            "team_a_score": match['team_a_score'],
                            "team_b_score": match['team_b_score'],
                            "team_b": match['team_b']
                        })
                    })
                })
        },

        methods: {
            getStatusForTeam(teamA, teamB) {
                if (teamA > teamB) {
                    return 'winner';
                } else if (teamA < teamB) {
                    return 'loser';
                } else {
                    return 'drawer';
                }
            }
        }
    }
</script>

<style scoped>
    #show-matches {
        background-color: #f1c550;
        width: 60%;
        margin: 30px auto;
        color: #fff9e0;
    }

    #container-title {
        text-align: center;
        border: 1px black solid;
    }

    #warning {
        padding: 16px;
        border: 1px black solid;
        background-color: #fff9e0;
        color: black;
    }

    ul {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        margin: 0;
        padding: 0;
        text-align: center;
    }

    li {
        display: flex;
        border: 1px black solid;
    }

    .player-column {
        display: flex;
        width: 100%;
        border-left: 1px black solid;
        border-right: 1px black solid;
        text-transform: uppercase;
    }

    .player-column h3 {
        flex: 1;
    }

    .winner {
        background-color: #a1c45a;
    }

    .loser {
        background-color: #ea4c4c;
    }

    .drawer {
        background-color: #cccccc;
    }
</style>
