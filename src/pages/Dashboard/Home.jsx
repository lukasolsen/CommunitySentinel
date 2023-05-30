import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function DashboardHome() {
    const totalReports = 1568;
    const resolvedReports = 1264;
    const reputationPoints = 2357;
    const activeContributions = 48;

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
                        <p className="text-gray-500 text-lg mb-1">
                            {totalReports}
                        </p>
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
                        <p className="text-gray-500 text-lg mb-1">
                            {resolvedReports}
                        </p>
                        <p className="text-gray-500 mb-2">
                            Reports that have been successfully resolved.
                        </p>
                        {/* Additional information or details can be added here */}
                    </div>
                </div>

                <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"></div>
                <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"></div>
            </div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                    <h1 className="text-gray-800 dark:text-white font-bold mb-4">
                        Active Contributions
                    </h1>
                    <p className="text-gray-500">
                        {activeContributions} contributions this month
                    </p>
                    <p className="text-gray-500">Keep up the great work!</p>
                </div>
                <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
                <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
                <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
            </div>
        </main>
    );
}