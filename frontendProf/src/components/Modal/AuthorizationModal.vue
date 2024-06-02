<template>
    <transition name="modal-animation">
        <div v-show="modalActive" class="modal show" id="authorizationModal">
            <div class="modal_backdrop" @click="close"></div>
            <div class="modal_content">
                <button type="button" @click="close" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
                <div class="modal_header">
                    <h5 class="modal_title">Авторизация</h5>
                </div>
                <div class="modal_body">

                    <form class="authorization_form" @submit.prevent="sendForm(this)">
                        <div class="input-group" :class="{ error: formErrors.login }">
                            <label for="login">Логин</label>
                            <input type="text" placeholder="Введите логин" id="login" v-model="formData.login">
                            <span v-if="formErrors.login" class="error-message">{{ formErrors.login }}</span>
                        </div>

                        <div class="input-group" :class="{ error: formErrors.password }">
                            <label for="password">Пароль</label>
                            <input type="password" placeholder="Введите пароль" id="password"
                                v-model="formData.password">
                            <span v-if="formErrors.password" class="error-message">{{ formErrors.password }}</span>
                        </div>

                        <div v-if="registerForm" class="input-group" :class="{ error: formErrors.confirm_password }">
                            <label for="repeatPassword">Повторите пароль</label>
                            <input type="password" placeholder="Повторите пароль" id="repeatPassword"
                                v-model="formData.confirm_password">
                            <span v-if="formErrors.confirm_password" class="error-message">{{
            formErrors.confirm_password }}</span>
                        </div>

                        <button type="submit" class="btn_submit">Войти</button>
                        <span v-if="!registerForm" class="text-form">
                            Нет аккаунта? <span @click="toggleFormMode">Зарегистрироваться</span>
                        </span>

                        <span v-else class="text-form">
                            Уже зарегистрированы? <span @click="toggleFormMode">Войти</span>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import UserService from '@/api/UserService';

export default {
    props: {
        modalActive: {
            type: Boolean,
            required: true
        },

    },
    data() {
        return {
            registerForm: false,
            formData: {
                login: '',
                password: '',
                confirm_password: ''
            },
            formErrors: {}
        };
    },
    methods: {
        close() {
            this.$emit('close')
        },
        sendForm() {

            if (this.validateForm(this.formData)) {
                if (this.registerForm) {
                    UserService.createUser(this.formData).then((response) => {
                        console.log(response);
                    }).catch((error) => {
                        console.error(error);
                    });
                }
                else {
                    UserService.login(this.formData).then((response) => {
                        console.log(response);
                    }).catch((error) => {
                        console.error(error);
                    });
                }
            }
        },
        validateForm(form) {
            // Очищаем старые ошибки перед проверкой новых значений
            this.formErrors = {};

            let valid = true;

            if (!form.login || form.login.trim() === '') {
                this.formErrors.login = 'Введите логин';
                valid = false;
            }

            if (!form.password || form.password.trim() === '') {
                this.formErrors.password = 'Введите пароль';
                valid = false;
            }

            if (this.registerForm && form.password !== form.confirm_password) {
                this.formErrors.confirm_password = 'Пароли не совпадают';
                valid = false;
            }

            return valid;
        },
        toggleFormMode() {
            this.registerForm = !this.registerForm;
            this.formErrors = {}; // очистка ошибок при изменении режима формы
            this.formData.login = '';
            this.formData.password = '';
            this.formData.confirm_password = '';
        }
    },
}
</script>
<style scoped>
.text-form {
    display: flex;
    text-align: center;
    width: 100%;
    justify-content: center;
    margin-top: 10px;

    &>span {
        cursor: pointer;
        text-decoration: underline;
        margin-left: 5px;

        &:hover {
            opacity: 0.8;
        }
    }
}

.input-group {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 5px;
}

.input-group:first-child {
    margin-top: 0;
}

.btn_submit {
    margin-top: 10px;
    padding: 10px;
    font-size: 20px;
    background-color: #f2ddbe;
    outline: none;
    border: 1px solid gray;
    border-radius: 5px;
    width: 100%;
    transition: 0.3s all;
    cursor: pointer;

    &:hover {
        background-color: #eed3ab;
    }
}

input {
    background-color: #f2ddbe;
    outline: none;
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-size: 20px;
    color: rgb(73, 73, 73);
    transition: 0.5s all;

    &:focus {
        box-shadow: 0px 0px 4px #ae9978;
    }
}

.modal-animation-enter-active,
.modal-animation-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
    opacity: 0;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999999;
    transition: 0.5s all;
}

.modal.show {}

.modal_backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999999;
}


.modal_content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffefd5;
    z-index: 199999001;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    width: 400px;
}

.modal_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    justify-content: center;
}

.modal_title {
    margin: 0;
    font-size: 30px;
    font-weight: 600;
}

.modal_body {
    padding: 20px;
}

.authorization_form {
    width: 100%;
}

.btn-close {
    background: none;
    border: none;
    cursor: pointer;
    transition: 0.5s all;
    position: absolute;
    top: 15px;
    right: 18px;
}

.btn-close::before {
    content: '×';
    font-size: 20px;

}

.btn-close:hover {
    color: red;
}

.btn-close:focus {
    outline: none;
}
</style>