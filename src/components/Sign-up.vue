<template>
  <div class="max-w-md mx-auto mt-10">
    <h2 class="text-center text-2xl font-bold mb-4">Signup</h2>
    <form @submit.prevent="register">
      <input v-model="form.firstName" type="text" placeholder="First Name" class="input" />
      <input v-model="form.lastName" type="text" placeholder="Last Name" class="input" />
      <input v-model="form.mobileNumber" type="text" placeholder="Mobile Number" class="input" />
      <input v-model="form.email" type="email" placeholder="Email" class="input" />
      <input v-model="form.password" type="password" placeholder="Password" class="input" minlength="6" />
      <button type="submit" :disabled="isLoading" class="btn">
        {{ isLoading ? "Registering..." : "Register" }}
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
      firstName: "",
      lastName: "",
      mobileNumber: "",
      password: ""
    });

    const isLoading = ref(false);
    const register = async () => {
      isLoading.value = true;
      try {

        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/user/register`,
          form
        );
        if (response.data.id) {
          alert("Registration Successful! Please verify your email to login")
          router.push("/login");
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        alert(error?.response?.data?.message || "Registration Failed. Please try again.");
      } finally {
        isLoading.value = false;
      }
    };

    return { form, register, isLoading };
  },
};
</script>
