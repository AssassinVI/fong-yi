<template>
  <PageFixed id="loanPage">
    <div class="loan-main">
      <LoanForm />
      <LoanResult />
    </div>
  </PageFixed>
</template>

<script setup lang="ts">
import PageFixed from "@/components/pageFixed/PageFixed.vue";
import LoanForm from "@/components/loan/LoanForm.vue";
import LoanResult from "@/components/loan/LoanResult.vue";
import "@/assets/scss/loan/loan.scss";
</script>

<style scoped></style>
