import React, { useEffect, useState } from 'react';
import '../../styles/finance.css';

const FinanceCal = () => {
  const [amount, setAmount] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [err, setErr] = useState("");

  useEffect(() => {
    if (err) {
      const timer = setTimeout(() => {
        setErr(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [err]);

  const calculatePayment = () => {
    if (!amount || !downPayment || !interestRate || !loanTerm) {
      setErr("All fields are required");
      return;
    }
    if (amount <= downPayment) {
      setErr("Amount must be greater than down payment");
      return;
    }
    if (interestRate <= 0) {
      setErr("Interest rate must be greater than 0");
      return;
    }
    if (loanTerm <= 0) {
      setErr("Loan term must be greater than 0");
      return;
    }
    if (downPayment > amount) {
      setErr("Down payment must be less than amount");
      return;
    }
    if (interestRate > 100) {
      setErr("Interest rate must be less than 100");
      return;
    }
    const principal = amount - downPayment;
    const rate = interestRate / 100 / 12;
    const term = loanTerm * 12;

    const payment = (principal * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div className="finance-cal-container">
      {err && <p className="error">{err}</p>}
      <div className="input-row">
        <input type="number" className="input-field" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" />
        <input type="number" className="input-field" value={downPayment} onChange={e => setDownPayment(e.target.value)} placeholder="Down Payment" />
      </div>
      <div className="input-row">
        <input type="number" className="input-field" value={interestRate} onChange={e => setInterestRate(e.target.value)} placeholder="Interest Rate" />
        <input type="number" className="input-field" value={loanTerm} onChange={e => setLoanTerm(e.target.value)} placeholder="Loan Term (years)" />
      </div>
      <button className="calculate-button" onClick={calculatePayment}>Calculate</button>
      {monthlyPayment && <p className="result">Monthly Payment: {monthlyPayment}</p>}
    </div>
  );
};

export default FinanceCal;
