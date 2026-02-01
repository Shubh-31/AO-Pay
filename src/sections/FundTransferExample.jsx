"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const FundTransferExample = () => {
  const codeString = `// Connect to bank account and retrieve balance
const response = await fetch('/api/v1/accounts/balance', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const bankData = await response.json();
console.log('Account Balance:', bankData.available_balance);

// Initialize fund transfer
const transferResponse = await fetch('/api/v1/transfers', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: 5000,
    currency: 'USD',
    recipient_account: 'acc_recipient_12345',
    description: 'Vendor Payment'
  })
});`;

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        

        {/* Syntax Highlighted Code */}
        <SyntaxHighlighter language="javascript" style={atomDark} wrapLongLines>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </section>
  );
};

export default FundTransferExample;
