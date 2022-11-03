<template>
    <div class="content-block">
        <header-component />

        <main class="main">
            <router-view />
        </main>
    </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');

/*=============================*/
/* ROOT */
/*=============================*/
:root {
    --color-white: #fff;
    --color-bg: #f7f8f9;
    --color-grey: #adaeae;
    --color-black: #1b1d1f;
    --color-text: #a9a8a8;
    --color-blue: #0058a2;
    --color-yellow: #e1bb00;
    --color-green: #01ab5d;
    /*header*/
    --header-height: 150px;
}
/*media*/
@media (max-width: 1199px) {
    :root {
        --header-height: 60px;
    }
}
@media (max-width: 767px) {
    :root {
        --header-height: 50px;
    }
}

/*=============================*/
/* RESET STYLES */
/*=============================*/
* {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
}
html::-webkit-scrollbar,
html *::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
html::-webkit-scrollbar-track,
html *::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.2);
}
html::-webkit-scrollbar-thumb,
html *::-webkit-scrollbar-thumb {
    background-color: var(--color-blue);
}
:focus,
:active,
:visited {
    outline: none;
}

/*=============================*/
/* GLOBAL SETTINGS */
/*=============================*/
html {
    height: 100%;

    main {
        flex: 1;
    }
}
body {
    height: 100%;
    color: var(--color-black);
    font-weight: 400;
    background-color: var(--color-bg);

    &.lock {
        overflow: hidden;
    }
}
.content-block {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    overflow: hidden;
}
.section {
    position: relative;
}
.container {
    padding: 0 15px;
}
.row {
    --bs-gutter-x: 30px;
}
/*spacers*/
.spacer-xl {
    height: 100px;
}
.spacer-lg {
    height: 80px;
}
.spacer-md {
    height: 60px;
}
.spacer-sm {
    height: 40px;
}
/*media*/
@media (min-width: 1441px) and (max-width: 1640px) {
    .container {
        max-width: 1340px;
    }
}
@media (min-width: 1200px) and (max-width: 1440px) {
    .container {
        max-width: 1240px;
    }
}
@media (min-width: 1200px) and (max-width: 1730px) {
    .col-lt-12 {
        flex: 0 0 100%;
        max-width: 100%;
    }
    .col-lt-11 {
        flex: 0 0 91.666667%;
        max-width: 91.666667%;
    }
    .col-lt-10 {
        flex: 0 0 83.333333%;
        max-width: 83.333333%;
    }
    .col-lt-9 {
        flex: 0 0 75%;
        max-width: 75%;
    }
    .col-lt-8 {
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }
    .col-lt-7 {
        flex: 0 0 58.333333%;
        max-width: 58.333333%;
    }
    .col-lt-6 {
        flex: 0 0 50%;
        max-width: 50%;
    }
    .col-lt-5 {
        flex: 0 0 41.666667%;
        max-width: 41.666667%;
    }
    .col-lt-4 {
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
    .col-lt-3 {
        flex: 0 0 25%;
        max-width: 25%;
    }
    .col-lt-2 {
        flex: 0 0 16.666667%;
        max-width: 16.666667%;
    }
    .offset-lt-0 {
        margin-left: 0;
    }
    .offset-lt-3 {
        margin-left: 25%;
    }
    .offset-lt-2 {
        margin-left: 16.666667%;
    }
    .offset-lt-1 {
        margin-left: 8.333333%;
    }
}
@media (max-width: 1640px) {
    .spacer-xl {
        height: 80px;
    }
}
@media (max-width: 1440px) {
    .spacer-xl,
    .spacer-lg {
        height: 70px;
    }
}
@media (max-width: 1199px) {
    .spacer-xl,
    .spacer-lg {
        height: 60px;
    }
}
@media (max-width: 991px) {
    .spacer-xl,
    .spacer-lg,
    .spacer-md {
        height: 50px;
    }
}
@media (max-width: 575px) {
    .spacer-xl,
    .spacer-lg,
    .spacer-md {
        height: 40px;
    }
}

/*=============================*/
/* TYPOGRAPHY */
/*=============================*/
body * {
    font-family: 'Lato', sans-serif;
}
a {
    cursor: pointer;
    text-decoration: none;
    outline: none;
    color: inherit;
    transition: all 0.3s;

    &:link,
    &:visited,
    &:active,
    &:hover {
        cursor: pointer;
        text-decoration: none;
        outline: none;
    }
}
iframe {
    border: none;
    outline: none;
}
ul,
ol {
    list-style: none;
}
img {
    width: 100%;
    height: auto;
    max-width: 100%;
}
button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type='number'] {
    -moz-appearance: textfield;
    -webkit-appearance: none;
}
/*text*/
.text {
    &,
    p {
        font-size: 18px;
        line-height: 1.5em;
        color: var(--color-black);
    }

    a {
        position: relative;
        color: var(--color-blue);
        cursor: pointer;

        &:hover {
            &::before {
                right: auto;
                left: 0;
                width: 100%;
            }
        }

        &::before {
            position: absolute;
            content: '';
            bottom: 0;
            right: 0;
            width: 0;
            height: 2px;
            background-color: var(--color-blue);
            transition: all 0.3s;
        }
    }
}
/*titles*/
h1,
.h1 {
    position: relative;
    font-size: 44px;
    line-height: 1.3em;
    color: var(--color-black);
}
h2,
.h2 {
    position: relative;
    font-size: 40px;
    line-height: 1.3em;
    color: var(--color-black);
}
h3,
.h3 {
    position: relative;
    font-size: 36px;
    line-height: 1.3em;
    color: var(--color-black);
}
h4,
.h4 {
    position: relative;
    font-size: 32px;
    line-height: 1.3em;
    color: var(--color-black);
}
h5,
.h5 {
    position: relative;
    font-size: 28px;
    line-height: 1.3em;
    color: var(--color-black);
}
h6,
.h6 {
    position: relative;
    font-size: 24px;
    line-height: 1.3em;
    color: var(--color-black);
}
/*font-weight*/
.bold {
    font-weight: 700;
}
.normal {
    font-weight: 400;
}
.thin {
    font-weight: 300;
}
.text-upper {
    text-transform: uppercase;
}
/*text-line*/
.text-line-1 {
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
}
.text-line-2 {
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
}
.text-line-3 {
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
}
.text-line-4 {
    overflow: hidden;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    display: -webkit-box;
}
.text-line-5 {
    overflow: hidden;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    display: -webkit-box;
}
.text-line-6 {
    overflow: hidden;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    display: -webkit-box;
}

/*=============================*/
/* BUTTONS */
/*=============================*/
.btn {
}
</style>
<script>
import HeaderComponent from '@/components/HeaderComponent';
export default {
    components: {HeaderComponent},
};
</script>
