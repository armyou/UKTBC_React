import axios, { type AxiosResponse } from "axios";
import { url } from "../constants";

// types/donate.ts

export interface DonateData {
    // Personal Details
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    // Company Donation (optional)
    onBehalfOfCompany: "yes" | "no";
    companyName?: string;
    companyAddress?: string;
    companyCity?: string;
    companyPostcode?: string;
    companyCountry?: string;
    // Donation Details
    donationAmount: number;
    ClaimGiftAid: boolean; // converted in onFinish
    isThisPersonalMoney?: boolean;
}

export const donateNow = async (data: DonateData) => {
    try {
        const response: AxiosResponse = await axios.post(`${url}/donate`, data);
        console.log(response.data);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
        console.error("Donation error:", error.response?.data || error.message);
        } else {
        console.error("Unexpected error:", error);
        }
    }
};