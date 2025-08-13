interface Event {
    id: string;
    eventName: string;
    date: string;
    time: string;
}

interface Project {
    id: string;
    projectName: string;
    location: string;
    budget: string;
}

interface HomeScreenData {
    upcomingEvents: Event[];
    upcomingProjects: Project[];
}

// Static data for now
const upcomingEvents: Event[] = [
    { id: "1", eventName: "event1", date: "22-10-2025", time: "10:00 am" },
    { id: "2", eventName: "event2", date: "22-10-2025", time: "10:00 am" },
    { id: "3", eventName: "event3", date: "22-10-2025", time: "10:00 am" },
];

const upcomingProjects: Project[] = [
    { id: "1", projectName: "Project 1", location: "Hyderabad", budget: "12cr" },
    { id: "2", projectName: "Project 2", location: "Hyderabad", budget: "12cr" },
    { id: "3", projectName: "Project 3", location: "Hyderabad", budget: "12cr" },
    { id: "4", projectName: "Project 4", location: "Hyderabad", budget: "12cr" },
];

const getHomescreendata = async (): Promise<HomeScreenData> => {
    try {
        // In future, replace with your API call
        // const response = await axios.get<HomeScreenData>('/your-api-endpoint');
        // return response.data;

        // Static return for now
        return {
        upcomingEvents,
        upcomingProjects,
        };
    } catch (error) {
        console.error(error);
        return { upcomingEvents: [], upcomingProjects: [] };
    }
};

export { getHomescreendata };