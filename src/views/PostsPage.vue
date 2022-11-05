<template>
    <section class="section">
        <div class="spacer-sm"></div>
        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-12">
                    <profile-info-component />
                </div>

                <div class="col-xl-6 col-12">
                    <div style="height: 1000px; background-color: #fff"></div>
                </div>

                <div class="col-xl-3 col-12">
                    <keep-in-touch-component />
                </div>
            </div>
        </div>
        <div class="spacer-xl"></div>
    </section>
</template>

<script setup>
import ProfileInfoComponent from '@/components/ProfileInfoComponent';
import KeepInTouchComponent from '@/components/KeepInTouchComponent';
</script>
