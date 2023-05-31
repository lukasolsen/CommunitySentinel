import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faIdBadge,
    faArrowRight,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
    const [isAdditionalInfoVisible, setIsAdditionalInfoVisible] =
        useState(false);

    //Report Type -> Youtube Report
    //Report Title -> A scammer, please ban him
    //Report Issued -> 2 days ago
    //Report Status -> Resolved
    //Report ID -> 159
    //Report Report -> HelloWorld#2525
    //Report Reason -> Scamming
    //Report Resolver -> ResolverUser#123

    const toggleAdditionalInfo = () => {
        setIsAdditionalInfoVisible(!isAdditionalInfoVisible);
    };

    return (
        <div className="rounded-lg border-gray-300 dark:bg-gray-800 dark:border-gray-600 h-48 md:h-72 px-1">
            <div className="flex px-2 pb-3 mt-2 justify-between">
                <a href="/dashboard/category?Youtube-Rep" className="">
                    <span className="bg-red-100 text-red-800 hover:text-gray-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                        {props.reportType
                            ? props.reportType
                            : "Something went wrong..."}
                    </span>
                </a>

                <span className="align-middle text-gray-300">
                    <FontAwesomeIcon icon={faIdBadge} className="mr-1" />
                    {props.reportID ? props.reportID : "-1"}
                </span>
            </div>

            <div className="px-5 pb-5">
                <div className="flex justify-between items-center">
                    <a href="/dashboard/item/asd">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {props.reportTitle
                                ? props.reportTitle
                                : "Undefined Title"}
                        </h5>
                    </a>
                    <a
                        href={`/dashboard/item/${
                            props.reportID ? props.reportID : "-1"
                        }`}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
                <span className="text-gray-400">
                    Issued by{" "}
                    <a
                        href={`/user/${
                            props.reportIssuer ? props.reportIssuer : "Unknown"
                        }`}
                        className="text-teal-400 hover:underline"
                    >
                        {props.reportIssuer ? props.reportIssuer : "Unknown"}
                    </a>
                </span>
            </div>

            <div className="h-full flex flex-col justify-end">
                {/* Additional Details */}
                <div className="bg-white dark:bg-gray-800 rounded-lg px-5 py-3 select-none transition-all mb-auto">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={toggleAdditionalInfo}
                    >
                        <h6 className="text-base font-medium text-gray-800 dark:text-white mb-2">
                            Report Details
                        </h6>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={`text-gray-600 dark:text-gray-400 transition-transform ${
                                isAdditionalInfoVisible
                                    ? "transform rotate-180"
                                    : ""
                            }`}
                        />
                    </div>
                    {isAdditionalInfoVisible && (
                        <ul className="text-sm text-gray-600 dark:text-gray-400">
                            <li>
                                <span className="font-semibold">Category:</span>{" "}
                                <a
                                    href="/dashboard/category?Youtube-Rep"
                                    className="text-red-500 hover:underline cursor-pointer"
                                >
                                    {props.reportType
                                        ? props.reportType
                                        : "Something went wrong..."}
                                </a>
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Date Issued:
                                </span>{" "}
                                {props.dateIssued ? props.dateIssued : "0"}
                            </li>
                            <li>
                                <span className="font-semibold">Status:</span>{" "}
                                <span className="text-primary-500">
                                    {props.reportStatus
                                        ? props.reportStatus
                                        : "Failed"}
                                </span>
                            </li>
                            {props.reportStatus === "Resolved" && (
                                <li>
                                    <span className="font-semibold">
                                        Resolved By:
                                    </span>{" "}
                                    <a
                                        href={`/user/${
                                            props.reportResolver
                                                ? props.reportResolver
                                                : "Unknown"
                                        }`}
                                        className="text-teal-500 hover:underline"
                                    >
                                        {props.reportResolver
                                            ? props.reportResolver
                                            : "Unknown"}
                                    </a>
                                </li>
                            )}

                            <li>
                                <span className="font-semibold">
                                    Resolution Date:
                                </span>{" "}
                                {props.reportResolutionDate
                                    ? props.reportResolutionDate
                                    : "May 30, 2023"}
                            </li>
                            <li>
                                <span className="font-semibold">Comments:</span>{" "}
                                {props.reportComments
                                    ? props.reportComments
                                    : 0}
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
