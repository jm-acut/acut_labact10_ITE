import { useRegisterSW } from 'virtual:pwa-register/react';

export default function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  if (!offlineReady && !needRefresh) return null;

  return (
    <div role="alert" className="pwa-toast">
      <span>
        {offlineReady
          ? 'App is ready to work offline.'
          : 'New content available. Click reload to update.'}
      </span>
      <div className="pwa-actions">
        {needRefresh && (
          <button className="btn primary" onClick={() => updateServiceWorker(true)}>
            Reload
          </button>
        )}
        <button className="btn" onClick={close}>Close</button>
      </div>
    </div>
  );
}