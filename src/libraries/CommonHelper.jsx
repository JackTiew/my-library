const CommonHelper = () => {

    const randomColor = () => {
        return `#${Math.random().toString(16).substring(2, 8).padEnd(6, '0')}`;
    };

    const randomString = (length) => {
        return length <= 11
            ? Math.random().toString(36).substring(2, 2 + length).padEnd(length, '0')
            : randomString(11) + randomString(length - 11);
    }

    const getNumberOnlyFromString = (text) => {

        if (typeof(text) !== 'string') {
            return text;
        }
        else {
            return +text.replace(/\D/g, "");
        }
    };

    return {
        randomColor,
        randomString,
        getNumberOnlyFromString
    }
}

export default CommonHelper;