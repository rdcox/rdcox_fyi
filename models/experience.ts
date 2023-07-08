export default interface Experience {
    id: number,
    organization: string,
    role: string,
    city: string,
    state: string,
    country: string,
    start_month: string,
    start_year: number,
    end_month: string,
    end_year: number,
    points: string[],
    exp_type: string
}