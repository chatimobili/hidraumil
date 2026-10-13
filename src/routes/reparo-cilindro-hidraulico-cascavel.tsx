import { createFileRoute } from "@tanstack/react-router";
import { HydraulicRepairServicePage } from "@/components/site/HydraulicRepairServicePage";
import { cylinderRepairService, repairServiceHead } from "@/lib/hydraulic-repair-services";

export const Route = createFileRoute("/reparo-cilindro-hidraulico-cascavel")({
  head: () => repairServiceHead(cylinderRepairService),
  component: () => <HydraulicRepairServicePage service={cylinderRepairService} />,
});
