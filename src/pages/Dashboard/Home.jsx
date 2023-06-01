import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faCheckCircle,
  faStar,
  faHistory,
  faIdBadge,
  faChevronDown,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import LineChart from "../../components/PanelChart";
import { ParentSize } from "@visx/responsive";
import { data } from "../../components/AreaChart";
import Card from "../../components/Cards";

export default function DashboardHome() {
  const totalReports = 1568;
  const resolvedReports = 1264;
  const reputationPoints = 2357;
  const activeContributions = 48;

  const toggleAdditionalInfo = () => {
    setIsAdditionalInfoVisible(!isAdditionalInfoVisible);
  };

  const [isAdditionalInfoVisible, setIsAdditionalInfoVisible] = useState(false);

  return (
    <main className="p-4 md:ml-64 h-auto pt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-center">
          <FontAwesomeIcon
            icon={faFileAlt}
            className="text-blue-500 mr-4 text-3xl"
          />
          <div>
            <h1 className="text-gray-800 dark:text-white font-bold text-2xl mb-2">
              Total Reports
            </h1>
            <p className="text-gray-500 text-lg mb-1">{totalReports}</p>
            <p className="text-gray-500 mb-2">
              Reports that have been successfully resolved.
            </p>
            {/* Additional information or details can be added here */}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="text-green-500 text-4xl mr-4"
          />
          <div>
            <h1 className="text-gray-800 dark:text-white font-bold text-2xl mb-2">
              Resolved Reports
            </h1>
            <p className="text-gray-500 text-lg mb-1">{resolvedReports}</p>
            <p className="text-gray-500 mb-2">
              Reports that have been successfully resolved.
            </p>
            {/* Additional information or details can be added here */}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-center">
          <FontAwesomeIcon
            icon={faStar}
            className="text-yellow-300 mr-4 text-3xl"
          />
          <div>
            <h1 className="text-gray-800 dark:text-white font-bold text-2xl mb-2">
              Reputation Points
            </h1>
            <p className="text-gray-500 text-lg mb-1">{totalReports}</p>
            <p className="text-gray-500 mb-2">
              Reports that have been successfully resolved.
            </p>
            {/* Additional information or details can be added here */}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-center">
          <FontAwesomeIcon
            icon={faHistory}
            className="text-red-500 mr-4 text-3xl"
          />
          <div>
            <h1 className="text-gray-800 dark:text-white font-bold text-2xl mb-2">
              Active Contributions
            </h1>
            <p className="text-gray-500 text-lg mb-1">{totalReports}</p>
            <p className="text-gray-500 mb-2">
              Reports that have been successfully resolved.
            </p>
            {/* Additional information or details can be added here */}
          </div>
        </div>
      </div>
      <div className="border-2 rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4">
        <ParentSize>
          {({ width, height }) => (
            <LineChart data={data} width={width} height={height} />
          )}
        </ParentSize>
      </div>
      <h1 className="text-slate-800 dark:text-gray-100 text-3xl mb-5 text-center font-bold">
        Recent Reports
      </h1>
      <div className="grid grid-cols-3 gap-3 mb-4">
        <Card
          reportType="Youtube Report"
          reportID="5"
          reportTitle="Yes, he scammed me"
          reportIssuer="helloWorld#2525"
          dateIssued="May 29, 2023"
          reportStatus="Resolved"
          reportResolver="resolverUser#123"
          reportResolutionDate="May 30, 2023"
          reportComments="500"
        />
        <Card
          reportType="Youtube Report"
          reportID="5"
          reportTitle="Yes, he scammed me"
          reportIssuer="helloWorld#2525"
          dateIssued="May 29, 2023"
          reportStatus="Resolved"
          reportResolver="resolverUser#123"
          reportResolutionDate="May 30, 2023"
          reportComments="500"
        />
        <Card
          reportType="Youtube Report"
          reportID="5"
          reportTitle="Yes, he scammed me"
          reportIssuer="helloWorld#2525"
          dateIssued="May 29, 2023"
          reportStatus="Resolved"
          reportResolver="resolverUser#123"
          reportResolutionDate="May 30, 2023"
          reportComments="500"
        />
      </div>
    </main>
  );
}
