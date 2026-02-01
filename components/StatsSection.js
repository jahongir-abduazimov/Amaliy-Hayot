export default function StatsSection() {
  const stats = [
    {
      icon: "📚",
      number: "500+",
      label: "Maqolalar",
      description: "To‘liq yo‘riqnomalar",
    },
    {
      icon: "👥",
      number: "50K+",
      label: "O‘quvchilar",
      description: "Doimiy o‘quvchilar",
    },
    {
      icon: "⭐",
      number: "4.9/5",
      label: "Babolash",
      description: "Foydalanuvchilar bahosi",
    },
    {
      icon: "📱",
      number: "24/7",
      label: "Mavjud",
      description: "Har doim ochiq",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-border rounded-2xl p-8 text-center card-hover"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-black text-[#0EA5E9] mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-bold text-neutral-text-dark mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-neutral-text-gray">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
