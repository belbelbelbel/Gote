export type ImageData = {
    src: string,
    alt: string,
    sizes: string,
    objectFit: string,
    width: number,
    height: number,
    priority: boolean,
    className?: string,
    onMouseEnter?: () => void,
    onMouseLeave?: () => void,
}
export type FormData = {
    email: string,
    password: string,
}

export type ImgArrrayProps = {
    id: number;
    src: string;
    alt: string;
    sizes: string;
    objectFit: string;
  };


export type FormDataCreateAcount = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    phonenumber: string,
    address: string,
}

export const isFormFilled = (formData: Record<string, string>): boolean => {
    // Check if all values in the formData are truthy (i.e., not empty or undefined)
    return Object.values(formData).every((value) => value.trim() !== '');
};


export type FormDataField = {
    type: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    name: string,
    value: string,
    placeholder: string,
    width: string
}

export type ButtonContent = {
    reset: string,
    submit: string,
    button: string
}

export type buttonFields = {
    label: string,
    width: string,
    type: "reset" | "submit" | "button" | undefined,
}