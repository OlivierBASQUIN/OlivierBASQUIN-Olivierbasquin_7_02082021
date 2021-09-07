<template>
  <div class="signup">
    <SignupForm/>
  </div>
</template>

<script>
// @ est un alias pour /src
import SignupForm from '@/components/SignupForm.vue';

export default {
  name: 'Signup',

  components: {
    SignupForm
  },
}
</script>