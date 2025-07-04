
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const CreateGoal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goalType = location.state?.goalType || "Liburan";
  
  const [goalName, setGoalName] = useState("Liburan akhir tahun ke Jepang");
  const [targetAmount, setTargetAmount] = useState("Rp 120.000.000");
  const [targetDate, setTargetDate] = useState("18 Juni 2025");
  const [brirType, setBrirType] = useState("Committed");
  const [period, setPeriod] = useState("Bulanan");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-blue-400 to-blue-600 text-white">
        <div className="flex items-center justify-between p-4 pt-12">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/goals')}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="w-8"></div>
        </div>
        
        <div className="px-6 pb-8">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-2xl font-bold text-blue-600">BRI</span>
            <span className="text-2xl font-bold text-orange-400">mate.</span>
          </div>
          
          <h1 className="text-2xl font-bold mb-2">Halo, Karin!</h1>
          <h2 className="text-xl mb-6">Liburanmu Bersama Teman-Teman Makin Dekat</h2>
          
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/3ab356e3-e5fe-456a-bda1-bab39f9f5e72.png"
              alt="Travel Suitcase"
              className="w-48 h-32 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="px-6 py-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nama Goals
          </label>
          <p className="text-gray-600 text-sm mb-2">
            Misal: Liburan Akhir Tahun ke Jepang
          </p>
          <Input
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Target Tabungan Bersama
          </label>
          <p className="text-gray-600 text-sm mb-2">
            Misal: Rp 120.000.000
          </p>
          <Input
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Kapan Kamu Ingin Goal Ini Tercapai
          </label>
          <div className="flex items-center justify-between border rounded-lg px-4 py-3">
            <span>{targetDate}</span>
            <span>▼</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipe BRImate
            </label>
            <div className="flex items-center justify-between border rounded-lg px-4 py-3">
              <span>{brirType}</span>
              <span>▼</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Periode
            </label>
            <div className="flex items-center justify-between border rounded-lg px-4 py-3">
              <span>{period}</span>
              <span>▼</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Undang Member
          </label>
          <div className="border rounded-lg px-4 py-3 flex items-center space-x-2 text-gray-500">
            <span>👤</span>
            <span>Masukan Alias BRIMO Teman Kamu</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            support hingga 50 member dalam satu tujuan finansial
          </p>
        </div>

        <Button 
          onClick={() => navigate('/target')}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold"
        >
          Buat BRImate
        </Button>
      </div>
    </div>
  );
};

export default CreateGoal;
