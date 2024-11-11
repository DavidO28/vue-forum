import { ref } from "vue";

export function useDataReady() {
  const dataReady = ref(false);

  const dataIsReady = () => {
    dataReady.value = true;
  };

  return {
    dataReady,
    dataIsReady,
  };
}
