<template>
    <div class="keep-in-touch" v-if="users">
        <div class="keep-in-touch__title text bold color-black">Keep in touch</div>

        <div class="keep-in-touch__list">
            <div class="keep-in-touch__item" v-for="user of users" :key="user.full_name">
                <router-link to="/posts" class="keep-in-touch__img">
                    <img :src="user.img" :alt="user.full_name" loading="lazy" />
                </router-link>

                <div class="keep-in-touch__cont">
                    <router-link to="/posts" class="text color-black bold">{{ user.full_name }}</router-link>
                    <div class="text">{{ user.position }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const users = [
    {
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        full_name: 'Helen Jonson',
        position: 'CEO and Founder',
    },
    {
        img: 'https://images.unsplash.com/photo-1664574652984-5b5f769bef07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        full_name: 'Emily Mc Laren',
        position: 'UI Designer',
    },
    {
        img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        full_name: 'James Johns',
        position: 'CTO and Founder',
    },
    {
        img: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
        full_name: 'Fill Helberg',
        position: 'Frond-end Developer',
    },
];
</script>

<style lang="scss">
.keep-in-touch {
    position: relative;
    display: block;
    width: 100%;
    background-color: var(--color-white);
    border: 1px solid var(--color-grey);
    padding: 30px;

    &__title {
        padding-bottom: 25px;
        border-bottom: 1px solid var(--color-grey);
        margin-bottom: 25px;
    }

    &__list {
        position: relative;
        width: 100%;
    }

    &__item {
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: 25px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    &__img {
        position: relative;
        display: inline-block;
        width: 50px;
        min-width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--color-grey);
        overflow: hidden;
        margin-right: 20px;

        &:hover {
            img {
                transform: scale(1.05);
            }
        }

        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            will-change: transform;
            transition: all 0.7s;
        }
    }

    &__cont {
        position: relative;
        width: 100%;

        a {
            transition: all 0.3s;

            &:hover {
                color: var(--color-blue);
            }
        }
    }
}
//media
@media (max-width: 1440px) {
    .keep-in-touch {
        padding: 25px;

        &__title {
            padding-bottom: 20px;
        }

        &__img {
            width: 46px;
            min-width: 46px;
            height: 46px;
            margin-right: 16px;
        }
    }
}
@media (max-width: 1199px) {
    .keep-in-touch {
        display: none;
    }
}
</style>
