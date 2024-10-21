<template>
  <div class="max-w-md mx-auto mt-10">
    <h2 class="text-center text-2xl font-bold mb-4">Login</h2>
    <form @submit.prevent="login">
      <input v-model="form.email" type="email" placeholder="Email" class="input" />
      <input v-model="form.password" type="password" placeholder="Password" class="input" />
      <button type="submit" class="btn">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  setup() {
    const router = useRouter();
    const form = reactive({
      email: "",
      password: ""
    });

    const login = async () => {
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
      }
    };

    return { form, login };
  },
};
</script>

<style scoped>
.input {
  display: block;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
