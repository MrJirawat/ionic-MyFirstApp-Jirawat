<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button v-if="showBackButton" :default-href="'/'"/>
        </ion-buttons>
        <ion-title>{{ pageTitle }}</ion-title>
        <ion-buttons slot="end">
          <slot name="actions-end">
          </slot>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBackButton,
  IonButtons,
} from "@ionic/vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  props: {
    pageTitle: {
      type: String,
      rcquircd: true,
    },
  },
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    IonButtons,
  },
  setup() {
    const route = useRoute();

    const showBackButton = computed(() => route.path !== '/memories');
  
    return { showBackButton };
  },
};
</script>