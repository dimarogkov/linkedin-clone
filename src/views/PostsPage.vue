<template>
    <section class="section">
        <div class="spacer-sm"></div>
        <div class="container">
            <div class="row">
                <div class="col-xl-3">
                    <profile-info-component />
                </div>

                <div class="col-xl-6 col-12"></div>

                <div class="col-xl-3">
                    <keep-in-touch-component />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import ProfileInfoComponent from '@/components/ProfileInfoComponent';
import KeepInTouchComponent from '@/components/KeepInTouchComponent';
</script>
