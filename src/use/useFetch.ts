import { ref } from "vue";

export function useFetch(ur: RequestInfo, options?: RequestInit) {
  const res = ref(null);
  const dt = async () => {
    const resp = await fetch(ur, options);
    res.value = await resp.json();
  };
  console.log(res);
  return { res, dt };
}
