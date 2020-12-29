<template>
    <div class="container">
        <div class="login-back"></div>
        <div class="login-box">

            <div class="login-box__header">
                <h1>Login</h1>
            </div>

            <form @submit.prevent>

                <div class="input-box">
                    <label for="email">Email : </label>
                    <input
                    type="text"
                    id="email"
                    v-model="email">
                </div>

                <div class="input-box">
                    <label for="email">Password : </label>
                    <input
                    type="passowrd"
                    id="password"
                    v-model="password">
                </div>

                <div class="submit">
                    <button>Login</button>
                </div>

            </form>
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email: '',
            password: ''
        }
    }
}
</script>

<style lang="scss" scoped>

@import "../sass/global.scss";

.login-back{
    width: 100%;
    height: 100vh;
    background-image: url('../assets/back.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: blur(1px);
    //-webkit-filter: blur(8px);
    position: absolute;
}

.login-box{
    width: 30%;
    min-height: 50vh;
    //background-color: rgba(255, 255, 255, 0.712);
    background-color: rgba(0, 0, 0, 0.637);
    position: relative;
    top: 40vh;
    left: 40%;
    transform: translate(-50%, -50%);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 50px;
    box-shadow: black 8px 8px 15px;

    @media only screen and(max-width: 500px){
        width: 90%;
        left: 50%;
    }


    &__header{
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 2rem;
        color: #fff;
        
       
    }

    .submit{
        width: 100%;
        display: flex;
        justify-content: center;

        button{
            @include button;
            width: 50%;
            background-color: rgba(255, 255, 255, 0.603);
            color: black;
        }
    }

}

.input-box{
    margin: 30px 0px;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;

    input{
        @media only screen and(max-width: 500px){
        height: 45px;
    }
    }


    label{
        margin-bottom: 5px;
        color: #fff;
    }
}

</style>