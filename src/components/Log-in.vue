<template>
  <div class="max-w-md mx-auto mt-10">
    <h2 class="text-center text-2xl font-bold mb-4">Login</h2>
    <form @submit.prevent="login">
      <input v-model="form.email" type="email" placeholder="Email" class="input" />
      <input v-model="form.password" type="password" placeholder="Password" class="input" />
      <button type="submit" :disabled="isLoading" class="btn">
        {{ isLoading ? "Loading..." : "Login" }}
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  setup() {
    const router = useRouter();
    const form = reactive({
      email: "",
      password: ""
    });
    const isLoading = ref(false);

    const login = async () => {
      isLoading.value = true;
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/user/login`,
          form
        );
        if (response.data) {
          alert("Login Successful!");
          router.push("/success")
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        alert(error?.response?.data?.message || "Login Failed. Please check your credentials.");
      } finally {
        isLoading.value = false;
      }
    };

    return { form, login, isLoading };
  },
};
</script>
