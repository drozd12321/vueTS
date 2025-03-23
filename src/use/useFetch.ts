import { ref, type Ref } from "vue";
type dtFetch = () => Promise<void>;
interface fetchreq<T> {
  dt: dtFetch;
  res: Ref<T | undefined>;
}
export function useFetch<T>(
  ur: RequestInfo,
  options?: RequestInit
): fetchreq<T> {
  const res = ref<T>();
  const dt: dtFetch = async () => {
    const resp = await fetch(ur, options);
    res.value = await resp.json();
  };
  return { res, dt };
}
