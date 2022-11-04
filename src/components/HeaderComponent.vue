<template>
    <div>
        <header class="header">
            <div class="header__layer" :class="{active: isMenuLinksOpen}" @click="closeMenuLinks"></div>
            <div class="header__top">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="header__top-block">
                                <div class="row">
                                    <div class="col-lg-3 col-4 header__col">
                                        <div class="header__left">
                                            <router-link :to="{name: 'posts'}" class="header__logo">
                                                <img src="@/assets/logo.png" alt />
                                            </router-link>

                                            <nav class="header__menu">
                                                <div class="header__menu-link">
                                                    <span>Discover</span>
                                                    <i class="las la-angle-down"></i>
                                                </div>

                                                <div class="header__icon header__menu_mobile">
                                                    <i class="las la-ellipsis-h"></i>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                    <div class="col-6 header__col_desktop" :class="{active: isSearchOpen}">
                                        <div class="header__search">
                                            <form>
                                                <button type="submit"><i class="las la-search"></i></button>
                                                <input
                                                    type="text"
                                                    name="search"
                                                    placeholder="Search linkedin"
                                                    required
                                                />
                                            </form>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-8 header__col">
                                        <div class="header__right">
                                            <button
                                                class="header__icon header__icon_mobile"
                                                :class="{header__icon_active: isSearchOpen}"
                                                @click="openSearch"
                                            >
                                                <i class="las la-search"></i>
                                            </button>
                                            <button class="header__icon"><i class="las la-comment-alt"></i></button>
                                            <button class="header__icon"><i class="las la-bell"></i></button>
                                            <button
                                                class="header__icon header__burger"
                                                :class="{active: isMenuLinksOpen}"
                                                @click="openMenu"
                                            >
                                                <span></span>
                                            </button>
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

            <div class="header__bottom" :class="{active: isMenuLinksOpen}">
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
import {ref} from 'vue';

const isSearchOpen = ref(false);
const isMenuLinksOpen = ref(false);
const headerLinks = [
    {href: '/posts', name: 'Posts'},
    {href: '/articles', name: 'Articles'},
    {href: '/companies', name: 'Companies'},
    {href: '/jobs', name: 'Jobs'},
];

const openSearch = () => {
    isSearchOpen.value = !isSearchOpen.value;
    isMenuLinksOpen.value = false;
};
const openMenu = () => {
    isMenuLinksOpen.value = !isMenuLinksOpen.value;
    isSearchOpen.value = false;
};
const closeMenuLinks = () => (isMenuLinksOpen.value = false);
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

    &__layer {
        position: fixed;
        top: var(--header-height);
        left: 0;
        width: 100%;
        height: calc(100% - var(--header-height));
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;

        &.active {
            opacity: 1;
            visibility: visible;
        }
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
        z-index: 1;
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

        &.header__icon_mobile {
            display: none;
        }

        &.header__icon_active {
            color: var(--color-black);
        }

        &.header__icon_user {
            width: 34px;
            height: 34px;
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
                    letter-spacing: 1px;
                    color: var(--color-text);
                    padding: 0 12px;
                    transition: all 0.3s;

                    &:hover {
                        color: var(--color-black);
                    }

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

    &__burger,
    &__menu_mobile {
        display: none;
    }
}
.header-margin {
    position: relative;
    width: 100%;
    height: var(--header-height);
}
//media
@media (max-width: 1199px) {
    .header {
        &__logo {
            width: 24px;
        }

        &__menu-link {
            padding-left: 12px;
            margin-left: 12px;
        }

        &__icon {
            &.header__icon_user {
                margin-left: 8px;
            }
        }
    }
}
@media (max-width: 991px) {
    .header {
        &__col {
            z-index: 1;
            background-color: var(--color-white);
        }

        &__col_desktop {
            position: absolute;
            top: calc(100% + 1px);
            left: -15px;
            width: calc(100% + 30px);
            max-width: none;
            height: calc(100% + 1px);
            opacity: 0;
            visibility: hidden;
            transform: translateY(calc(-100% + 1px));
            transition: all 0.25s;

            &::before {
                position: absolute;
                content: '';
                top: 0;
                left: -30%;
                width: 10000px;
                height: 100%;
                background-color: var(--color-white);
                border-bottom: 1px solid var(--color-grey);
            }

            &.active {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
        }

        &__icon {
            margin-right: 20px;

            &.header__icon_mobile {
                display: inline-block;
            }
        }
    }
}
@media (max-width: 767px) {
    .header {
        &__top {
            height: 100%;
        }

        &__logo {
            width: 22px;
        }

        &__icon {
            &.header__icon_user {
                margin-left: 5px;
            }
        }

        &__bottom {
            position: fixed;
            top: var(--header-height);
            right: 0;
            width: 400px;
            height: calc(100% - var(--header-height));
            background-color: var(--color-white);
            border-bottom: none;
            overflow: auto;
            opacity: 0;
            visibility: hidden;
            transform: translateX(400px);
            transition: all 0.3s;

            &.active {
                opacity: 1;
                visibility: visible;
                transform: translateX(0);
            }

            .container,
            .col-12 {
                padding: 0;
            }

            .row {
                margin: 0;
            }
        }

        &__bottom-block {
            ul {
                display: block;
                li {
                    height: auto;
                    margin-right: 0;

                    a {
                        height: 40px;
                        padding: 0 20px;
                        border-bottom: 1px solid var(--color-grey);

                        &::before {
                            width: 3px;
                            height: calc(100% + 1px);
                        }
                    }
                }
            }
        }

        &__burger {
            position: relative;
            display: flex;
            align-items: center;
            width: 26px;
            min-width: 26px;
            height: 16px;

            &.active {
                &::before {
                    top: 7px;
                    transform: rotate(45deg);
                }

                &::after {
                    bottom: 7px;
                    transform: rotate(-45deg);
                }

                span {
                    left: 10px;
                    opacity: 0;
                    visibility: hidden;
                }
            }

            &::before,
            &::after,
            span {
                position: absolute;
                left: 0;
                width: 100%;
                height: 2px;
                background-color: var(--color-grey);
                transition: all 0.3s;
            }

            &::before {
                top: 0;
                content: '';
            }

            &::after {
                bottom: 0;
                content: '';
            }
        }
    }
}
@media (max-width: 575px) {
    .header {
        &__menu-link {
            font-size: 14px;

            .las {
                font-size: 10px;
            }
        }

        &__menu-link {
            display: none;
        }

        &__menu_mobile {
            position: relative;
            display: inline-block;
            font-size: 28px;
            margin-left: 12px;
        }

        &__bottom {
            width: 100%;
            transform: translateX(100%);
        }
    }
}
@media (max-width: 400px) {
    .header {
        &__icon {
            font-size: 22px;
            margin-right: 15px;

            &.header__icon_user {
                width: 30px;
                height: 30px;
                margin: 0;
            }
        }
    }
}
</style>
