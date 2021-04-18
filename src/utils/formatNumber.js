//membuat format number titik (indonesia)
export default number => {
    const formatNumbering = new Intl.NumberFormat("id-ID");
    return formatNumbering.format(number);
};