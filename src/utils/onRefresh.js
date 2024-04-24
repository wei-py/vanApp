export default function onRefresh(callback) {
  onMounted(() => {
    window.addEventListener('beforeunload', callback);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('beforeunload', callback);
  });
}