"use client";

import EnergyChart from "@/components/EnergyChart";
import { Card, Skeleton, Alert } from "@mui/material";
import { useState, useEffect } from "react";
import { energyData } from "@/mockData/energyData.js";
import { calculateTotalKwh } from "@/utils/calculateTotalKwh.js";
import InfoCard from "@/components/InfoCard";

const DashboardPage = () => {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const totalKwh = calculateTotalKwh(energyData);
  const lastReading = energyData[energyData.length - 1];

  useEffect(() => {
    const timer = setTimeout(() => {
      const simulateError = false;
      if (simulateError) {
        setHasError(true);
      }
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="flex lg:flex-row flex-col gap-10 max-w-7xl mx-auto mt-16 px-10">
        <div className="flex lg:flex-col md:flex-row flex-col gap-5 justify-around w-full lg:w-auto">
          <Skeleton variant="rectangular" height={100} width={250} />
          <Skeleton variant="rectangular" height={100} width={250} />
        </div>

        <Card sx={{ p: 4, width: "100%" }}>
          <Skeleton variant="rectangular" height={400} />
        </Card>
      </section>
    );
  }

  if (hasError) {
    return (
      <section className="max-w-7xl mx-auto mt-16 px-10">
        <Alert severity="error">
          Veriler yüklenirken bir hata oluştu. Lütfen tekrar deneyin.
        </Alert>
      </section>
    );
  }

  return (
    <section className="flex lg:flex-row flex-col gap-10 max-w-7xl mx-auto mt-16 px-10">
      <div className="flex lg:flex-col md:flex-row flex-col lg:gap-0 md:gap-0 gap-5 justify-around">
        <InfoCard
          text="Son Okuma"
          KwhInfo={lastReading}
          boxShadowRGB="0px 10px 20px rgba(217, 208, 241, 0.5)"
        />
        <InfoCard
          text="Bugün Toplam"
          KwhInfo={totalKwh}
          boxShadowRGB="0px 10px 20px rgba(208, 236, 241, 0.63)"
        />
      </div>

      <Card
        sx={{
          boxShadow: "0px 10px 20px rgba(241, 208, 214, 0.5)",
          p: 4,
          width: "100%",
        }}
      >
        <EnergyChart />
      </Card>
    </section>
  );
};

export default DashboardPage;
