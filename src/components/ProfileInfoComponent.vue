<template>
    <div class="profile-card" v-if="currentUser">
        <div class="profile-card__head">
            <div class="profile-card__img" @click="goTo">
                <img src="@/assets/user.jpg" :alt="currentUser.full_name" loading="lazy" />
            </div>

            <div class="profile-card__cont">
                <router-link to="/profile" class="text color-black bold">{{ currentUser.full_name }}</router-link>
                <div class="text">{{ currentUser.position }}</div>
            </div>
        </div>

        <div class="profile-card__info">
            <router-link :to="{name: 'posts'}" class="profile-card__info-item text">
                <span class="color-black bold">{{ currentUser.info.connections }}</span>
                <span>Connections</span>
            </router-link>
            <router-link :to="{name: 'posts'}" class="profile-card__info-item text">
                <span class="color-black bold">{{ currentUser.info.views }}</span>
                <span>Views</span>
            </router-link>
        </div>

        <ul class="profile-card__socials" v-if="pageName === '/profile'">
            <li v-for="social of currentUser.socials" :key="social">
                <a :href="social.value" target="_blank" class="text">
                    <i class="lab" :class="social.icon"></i>
                    <span class="text-line-1">{{ social.value }}</span>
                </a>
            </li>
        </ul>

        <router-link to="/profile" class="profile-card__link">View my profile</router-link>
    </div>
</template>

<script setup>
import {useRoute, useRouter} from 'vue-router/dist/vue-router';
import {computed} from 'vue';

const route = useRoute();
const router = useRouter();
const pageName = computed(() => route.path);

const goTo = () => router.push('/profile');
const currentUser = {
    full_name: 'Caroline Belford',
    position: 'Statton Oakmont',
    status: 'pro',
    info: {
        connections: 358,
        views: 25,
    },
    socials: [
        {icon: 'la-twitter', value: 'jordanbelford'},
        {icon: 'la-linkedin-in', value: 'linkedin.com/jordanbelford'},
        {icon: 'la-skype', value: 'jordanbelford'},
    ],
};
</script>

<style lang="scss">
.profile-card {
    position: fixed;
    display: block;
    width: 380px;
    background-color: var(--color-white);
    border: 1px solid var(--color-grey);

    &__head {
        position: relative;
        width: 100%;
        text-align: center;
        padding: 40px 30px;
    }

    &__img {
        position: relative;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: var(--color-grey);
        overflow: hidden;
        cursor: pointer;
        margin: 0 auto 20px auto;

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

    &__info {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 80px;
        border-top: 1px solid var(--color-grey);
        border-bottom: 1px solid var(--color-grey);
    }

    &__info-item {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        width: 50%;
        height: 100%;
        border-right: 1px solid var(--color-grey);
        transition: all 0.3s;

        &:hover {
            background-color: var(--color-grey-light);
        }

        &:last-child {
            border-right: none;
        }
    }

    &__socials {
        position: relative;
        width: 100%;
        padding: 20px;

        li {
            position: relative;
            width: 100%;
            margin-bottom: 18px;

            &:last-child {
                margin-bottom: 0;
            }

            a {
                display: flex;
                align-items: center;
                transition: all 0.3s;

                &:hover {
                    color: var(--color-black);
                }

                i {
                    font-size: 20px;
                    margin-right: 8px;
                }
            }
        }
    }

    &__link {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 60px;
        font-size: 16px;
        font-weight: 700;
        color: var(--color-blue);
        padding: 0 20px;
        transition: all 0.3s;

        &:hover {
            background-color: var(--color-blue-light);
        }
    }
}
//media
@media (max-width: 1640px) {
    .profile-card {
        width: 305px;
    }
}
@media (max-width: 1440px) {
    .profile-card {
        width: 280px;

        &__head {
            padding: 30px;
        }

        &__img {
            width: 110px;
            height: 110px;
            margin-bottom: 15px;
        }

        &__info {
            height: 72px;
        }

        &__link {
            height: 54px;
        }
    }
}
@media (max-width: 1199px) {
    .profile-card {
        display: none;
    }
}
</style>
