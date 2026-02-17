import React, { useEffect, useState } from "react";
import {
  GraduationCap,
  Target,
  Users,
  Award,
  Rocket,
  Eye,
} from "lucide-react";

const About = () => {

  // ===== COUNTERS =====
  const [years, setYears] = useState(0);
  const [teachers, setTeachers] = useState(0);
  const [students, setStudents] = useState(0);

  useEffect(() => {
    let y = 0;
    let t = 0;
    let s = 0;

    const yearsInterval = setInterval(() => {
      y++;
      setYears(y);
      if (y >= 10) clearInterval(yearsInterval);
    }, 180);

    const teachersInterval = setInterval(() => {
      t++;
      setTeachers(t);
      if (t >= 25) clearInterval(teachersInterval);
    }, 90);

    const studentsInterval = setInterval(() => {
      s += 25;
      setStudents(s);
      if (s >= 1000) clearInterval(studentsInterval);
    }, 40);

    return () => {
      clearInterval(yearsInterval);
      clearInterval(teachersInterval);
      clearInterval(studentsInterval);
    };
  }, []);

  return (
    <div className="bg-gray-50">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[75vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            About Our Institution
          </h1>

          {/* 🔥 Added Lines */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            For over a decade, we have been committed to delivering quality education 
            with discipline, innovation, and excellence.
          </p>

          <p className="mt-4 text-gray-300">
            Our institution focuses on shaping confident, responsible, and 
            future-ready individuals who can lead with knowledge and integrity.
          </p>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="relative py-24 px-6 bg-white overflow-hidden">

        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6366f1_1px,transparent_1px)] bg-[size:25px_25px]"></div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Mission */}
          <div className="group relative bg-gradient-to-br from-orange-50 to-yellow-50 p-12 rounded-3xl shadow-lg transition duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:from-orange-400 hover:to-yellow-400">

            <div className="absolute inset-0 opacity-10 rounded-3xl bg-[radial-gradient(#f97316_1px,transparent_1px)] bg-[size:20px_20px]"></div>

            <div className="relative">
              <Rocket className="w-12 h-12 text-orange-500 mb-6 group-hover:text-white" />
              <h2 className="text-3xl font-bold text-orange-500 mb-6 group-hover:text-white">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed group-hover:text-white">
                To provide a dynamic learning environment that encourages
                intellectual growth, discipline, creativity and strong moral
                values.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="group relative bg-gradient-to-br from-purple-50 to-indigo-50 p-12 rounded-3xl shadow-lg transition duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:from-purple-500 hover:to-indigo-600">

            <div className="absolute inset-0 opacity-10 rounded-3xl bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] bg-[size:20px_20px]"></div>

            <div className="relative">
              <Eye className="w-12 h-12 text-purple-600 mb-6 group-hover:text-white" />
              <h2 className="text-3xl font-bold text-purple-600 mb-6 group-hover:text-white">
                Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed group-hover:text-white">
                To be a center of excellence in education, fostering innovation,
                ethical leadership and global awareness.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-16">
            Core Values
          </h2>

          <div className="grid md:grid-cols-4 gap-10">

            <div className="group bg-white p-8 rounded-3xl shadow-lg transition duration-500 hover:bg-orange-400 hover:text-white">
              <GraduationCap className="w-10 h-10 text-orange-500 mb-6 group-hover:text-white" />
              <h3 className="text-xl font-bold mb-4">Academic Excellence</h3>
              <p className="text-gray-600 group-hover:text-white">
                Commitment to high academic standards.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-lg transition duration-500 hover:bg-purple-500 hover:text-white">
              <Target className="w-10 h-10 text-purple-500 mb-6 group-hover:text-white" />
              <h3 className="text-xl font-bold mb-4">Discipline</h3>
              <p className="text-gray-600 group-hover:text-white">
                Strong moral and ethical foundation.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-lg transition duration-500 hover:bg-blue-500 hover:text-white">
              <Users className="w-10 h-10 text-blue-500 mb-6 group-hover:text-white" />
              <h3 className="text-xl font-bold mb-4">Inclusivity</h3>
              <p className="text-gray-600 group-hover:text-white">
                Equal opportunities for every learner.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-lg transition duration-500 hover:bg-green-500 hover:text-white">
              <Award className="w-10 h-10 text-green-500 mb-6 group-hover:text-white" />
              <h3 className="text-xl font-bold mb-4">Holistic Growth</h3>
              <p className="text-gray-600 group-hover:text-white">
                Focus on academics, sports & personality development.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Our Growth in Numbers
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            A journey defined by dedication, commitment, and consistent academic excellence.
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-10 bg-orange-50 rounded-3xl shadow-xl">
              <h3 className="text-5xl font-extrabold text-orange-500 mb-4">
                {years}+
              </h3>
              <p className="font-semibold">Years of Excellence</p>
            </div>

            <div className="p-10 bg-purple-50 rounded-3xl shadow-xl">
              <h3 className="text-5xl font-extrabold text-purple-500 mb-4">
                {teachers}+
              </h3>
              <p className="font-semibold">Qualified Teachers</p>
            </div>

            <div className="p-10 bg-green-50 rounded-3xl shadow-xl">
              <h3 className="text-5xl font-extrabold text-green-500 mb-4">
                {students}+
              </h3>
              <p className="font-semibold">Bright Students</p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
