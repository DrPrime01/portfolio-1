import { useState } from 'react';

type AlertType = 'success' | 'warning' | 'info' | 'danger';

interface AlertState {
  show: boolean;
  text: string;
  type: AlertType;
}

interface ShowAlertParams {
  text: string;
  type?: AlertType;
}

const useAlert = () => {
  const [alert, setAlert] = useState<AlertState>({ show: false, text: '', type: 'danger' });

  const showAlert = ({ text, type = 'danger' }: ShowAlertParams) =>
    setAlert({ show: true, text, type });

  const hideAlert = () => setAlert({ show: false, text: '', type: 'danger' });

  return { alert, showAlert, hideAlert };
};

export default useAlert;
