"use client";

import { motion } from "framer-motion";

export default function PayrollAPISection() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-white">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">
            Developer-Friendly Payroll API
          </h2>
          <p className="text-gray-900 text-lg max-w-3xl mx-auto">
            Integrate payroll processing capabilities into your HR platform or
            build custom payroll solutions with our comprehensive API.
          </p>
        </motion.div>

        {/* API Blocks */}
        <div className="space-y-8 text-left">
          {[
            {
              method: "POST",
              endpoint: "/api/v1/payroll/process",
              body: `{
  "payroll_cycle": "monthly",
  "pay_period": "2024-01",
  "employees": ["EMP001", "EMP002", "EMP003"],
  "include_components": ["basic", "hra", "allowances"],
  "process_deductions": true,
  "auto_disburse": true
}`,
              description:
                "Processes payroll for selected employees for the given pay period.",
            },
            {
              method: "POST",
              endpoint: "/api/v1/payroll/disburse/bulk",
              body: `{
  "batch_id": "PAY-JAN-2024",
  "employees": [
    { "employee_id": "EMP001", "net_salary": 50000, "bank_account": "XXXX1234" }
  ],
  "payment_date": "2024-01-31"
}`,
              description:
                "Bulk disbursement of processed payroll to employee bank accounts.",
            },
            {
              method: "GET",
              endpoint: "/api/v1/payroll/payslip/{employee_id}/{month}",
              body: "Returns payslip details with earnings, deductions, and net pay.",
              description:
                "Fetches payslip details for a specific employee and month.",
            },
          ].map((api, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-green-400 font-mono text-sm border border-green-400 px-2 py-0.5 rounded">
                  {api.method}
                </span>
                <code className="text-gray-200 text-sm">{api.endpoint}</code>
              </div>
              <pre className="bg-gray-950 text-gray-300 text-sm p-4 rounded-lg overflow-x-auto">
                <code>{api.body}</code>
              </pre>
              <p className="text-gray-400 text-sm mt-3">{api.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 pt-8"
        >
          <button className="px-6 py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition">
            View API Documentation
          </button>
          <button className="px-6 py-3 rounded-xl border border-green-500 text-green-400 font-semibold hover:bg-green-500/10 transition">
            Access Developer Sandbox
          </button>
        </motion.div>
      </div>
    </section>
  );
}
