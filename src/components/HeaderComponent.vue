<template>
    <div>
        <header class="header">
            <div class="header__top">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="header__top-block">
                                <div class="row">
                                    <div class="col-3">
                                        <div class="header__left">
                                            <router-link :to="{name: 'posts'}" class="header__logo">
                                                <img src="@/assets/logo.png" alt />
                                            </router-link>

                                            <nav class="header__menu">
                                                <div class="header__menu-link">
                                                    <span>Discover</span>
                                                    <i class="las la-angle-down"></i>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="header__search">
                                            <form>
                                                <button type="submit"><i class="las la-search"></i></button>
                                                <input type="text" name="search" placeholder="Search linkedin" />
                                            </form>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="header__right">
                                            <button class="header__icon"><i class="las la-comment-alt"></i></button>
                                            <button class="header__icon"><i class="las la-bell"></i></button>
                                            <router-link :to="{name: 'posts'}" class="header__icon header__icon_user">
                                                <img src="@/assets/user.jpg" alt loading="lazy" />
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="header__bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <nav class="header__bottom-block">
                                <ul>
                                    <li v-for="link of headerLinks" :key="link">
                                        <router-link :to="link.href" exact active-class="active">{{
                                            link.name
                                        }}</router-link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div class="header-margin"></div>
    </div>
</template>

<script setup>
const headerLinks = [
    {href: '/posts', name: 'Posts'},
    {href: '/articles', name: 'Articles'},
    {href: '/companies', name: 'Companies'},
    {href: '/jobs', name: 'Jobs'},
];
</script>

<style lang="scss">
.header {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--header-height);

    .container,
    .row {
        height: 100%;
    }

    &__top,
    &__bottom {
        position: relative;
        display: block;
        width: 100%;
        height: 50%;
        border-bottom: 1px solid var(--color-grey);
    }

    &__top {
        background-color: var(--color-white);
    }

    &__top-block {
        position: relative;
        width: 100%;
        height: 100%;
    }

    &__left {
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;
    }

    &__logo {
        position: relative;
        display: flex;
        width: 26px;

        img {
            position: relative;
            width: 100%;
            height: auto;
        }
    }

    &__menu {
        position: relative;
        display: inline-block;
    }

    &__menu-link {
        position: relative;
        display: flex;
        align-items: center;
        font-size: 15px;
        font-weight: 700;
        padding-left: 15px;
        margin-left: 15px;
        border-left: 1px solid var(--color-grey);
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            color: var(--color-blue);
        }

        .las {
            position: relative;
            top: 1px;
            font-size: 12px;
            margin-left: 5px;
        }
    }

    &__search {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;

        form {
            position: relative;
            display: flex;
            align-items: center;
            width: 560px;
            height: 40px;

            input {
                position: relative;
                width: 100%;
                height: 100%;
                font-size: 15px;
                color: var(--color-black);
                background-color: var(--color-bg);
                border: 1px solid var(--color-grey);
                border-radius: 5px;
                padding: 0 15px 0 42px;
                transition: all 0.3s;

                &::placeholder {
                    color: var(--color-text);
                }

                &:focus {
                    background-color: transparent;
                    border-color: var(--color-blue);
                }
            }

            button {
                position: absolute;
                z-index: 1;
                left: 15px;
                font-size: 18px;
                color: var(--color-text);
                transition: all 0.3s;

                &:hover {
                    color: var(--color-black);
                }
            }
        }
    }

    &__right {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
    }

    &__icon {
        position: relative;
        display: inline-block;
        font-size: 24px;
        color: var(--color-text);
        cursor: pointer;
        margin-right: 15px;
        transition: all 0.3s;

        &.header__icon_user {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background-color: var(--color-bg);
            overflow: hidden;
            margin-left: 10px;
            transition: all 0.3s;

            &:hover {
                box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
                transform: translateY(-3px);
            }

            img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
            }
        }

        &:last-child {
            margin-right: 0;
        }

        &:hover {
            color: var(--color-black);
        }
    }

    &__bottom-block {
        position: relative;
        width: 100%;
        height: 100%;

        ul {
            position: relative;
            display: flex;
            justify-content: center;
            width: 100%;
            height: 100%;

            li {
                position: relative;
                height: 100%;
                margin-right: 20px;

                &:last-child {
                    margin-right: 0;
                }

                a {
                    position: relative;
                    display: flex;
                    align-items: center;
                    height: 100%;
                    font-size: 16px;
                    color: var(--color-text);
                    padding: 0 12px;
                    transition: all 0.3s;

                    &::before {
                        position: absolute;
                        content: '';
                        left: 0;
                        bottom: -1px;
                        width: 100%;
                        height: 3px;
                        background-color: var(--color-blue);
                        opacity: 0;
                        visibility: hidden;
                        transition: all 0.3s;
                    }

                    &.active {
                        color: var(--color-black);

                        &::before {
                            opacity: 1;
                            visibility: visible;
                        }
                    }
                }
            }
        }
    }
}
.header-margin {
    position: relative;
    width: 100%;
    height: var(--header-height);
}
</style>
