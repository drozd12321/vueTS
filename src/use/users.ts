import { ref } from "vue";
import { useFetch } from "./useFetch";

export async function useUsers() {
  const isLoading: Ref<boolean> = ref(false);
  const { res: users, dt } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  try {
    isLoading.value = true;
    await dt();
  } catch (error) {
    console.log(error);
    isLoading.value = false;
    return { users: ref([]), isLoading };
  } finally {
    isLoading.value = false;
  }
  return { users, isLoading };
}
