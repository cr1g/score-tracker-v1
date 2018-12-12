<template>
    <div id="add-match">
        <div id="container-title">
            <h1> Match Details </h1>
        </div>

        <form method="POST">
            <div class="match-details">
                <div id="first-player">
                    <h6> Team Name : </h6>
                    <label><input type="text" id="first-player-team" v-model="firstPlayerTeam"></label>
                    <h6> Goals : </h6>
                    <label><input type="number" id="first-player-score" v-model="firstPlayerScore"></label>
                </div>

                <div id="submit-button">
                    <input type="button" @click.stop.prevent="addMatch" id="upload-match" class="btn btn-primary"
                           value="Submit"/>
                </div>

                <div id="second-player">
                    <h6> Team Name : </h6>
                    <label><input type="text" id="second-player-team" v-model="secondPlayerTeam"></label>
                    <h6> Goals : </h6>
                    <label><input type="number" id="second-player-score" v-model="secondPlayerScore"></label>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "AddMatch",
        data() {
            return {
                firstPlayerTeam: '',
                firstPlayerScore: '',
                secondPlayerScore: '',
                secondPlayerTeam: ''
            }
        },
        methods: {
            addMatch() {
                let data = {
                    "team_a": this.firstPlayerTeam,
                    "team_a_score": this.firstPlayerScore,
                    "team_b_score": this.secondPlayerScore,
                    "team_b": this.secondPlayerTeam
                };

                fetch('http://localhost:5050/matches', {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(response => response.json())
                    .then(() => {
                        this.$router.push('/show-matches')
                    })
            }
        }
    }
</script>

<style scoped>
    #add-match {
        margin: 30px auto auto auto;
        width: 50%;
        height: 100%;
    }

    #container-title {
        text-align: center;
        border: 1px black solid;
        background-color: #f1c550;
        color: #fff9e0;
        padding: 7px;
    }

    form {
        width: 100%;
    }

    .match-details {
        display: flex;
        justify-content: space-between;
        text-align: center;
        border: 1px black solid;
        background-color: #fff9e0;
    }

    .match-details div {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 50px;
        font-size: 30px;
        margin-top: -20px;
    }

    #first-player-team, #second-player-team {
        margin-bottom: 20px;
    }

    #submit-button input {
        background-color: #ea4c4c;
        color: white;
        padding: 16px;
        border: none;
        border-radius: 5px;
        width: 100px;
        margin: auto auto auto auto;
        font-size: 18px;
        outline: none;
    }

    #submit-button input:hover {
        cursor: pointer;
    }
</style>
