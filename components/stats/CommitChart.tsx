 "use client"

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts"

type CommitData = {
  month: string
  commits: number
}

export default function CommitChart({ data }: { data: CommitData[] }) {
  return (
    <div className="border border-neutral-800 rounded-lg p-4">
      <p className="text-sm text-neutral-400 mb-4">Commits (12 derniers mois)</p>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
          <XAxis
            dataKey="month"
            stroke="#737373"
            fontSize={12}
            tickLine={false}
          />
          <YAxis stroke="#737373" fontSize={12} tickLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#171717",
              border: "1px solid #262626",
              borderRadius: "8px",
              fontSize: "12px",
            }}
          />
          <Line
            type="monotone"
            dataKey="commits"
            stroke="#7F77DD"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
