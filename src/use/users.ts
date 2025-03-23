import { ref } from "vue";
import type { Ref } from "vue";
import { useFetch } from "./useFetch";

interface UserI {
  id: Number;
  name: string;
  username: string;
  email: string;
}
type FetchUser = Promise<{ users: Ref<UserI[] | undefined> }>;
export async function useUsers(): FetchUser {
  const isLoading: Ref<boolean> = ref(false);
  const { res: users, dt } = useFetch<UserI[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  try {
    isLoading.value = true;
    await dt();
  } catch (error) {
    isLoading.value = false;
    console.log(error);
    return { users: ref([]) };
  } finally {
    isLoading.value = false;
  }
  return { users };
}
