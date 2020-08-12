const styles = theme => ({
    paper: {
        userSelect: "none",
        overflowX: "hidden",
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing(2),
        paddingBottom: "70px",
        position: "absolute",
        top: "50%",
        left: "50%",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "70%",
        height: "75%"
    },
    btnNext: {
        margin: theme.spacing(),
        marginTop: "20px",
        position: "absolute",
        right: 20
    },
    btnPrev: {
        margin: theme.spacing(),
        marginTop: "20px",
        position: "absolute",
        right: 100
    },
    btnPrevSubmit: {
        margin: theme.spacing(),
        marginTop: "20px",
        position: "absolute",
        right: 120
    },
    btnSubmit: {
        margin: theme.spacing(),
        marginTop: "20px",
        position: "absolute",
        right: 20
    },
    logo: {
        userSelect: "none",
        marginTop: "2px"
    }
});

export default styles;
