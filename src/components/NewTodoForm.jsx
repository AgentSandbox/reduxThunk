// eslint-disable-next-line react/prop-types
const NewTodoForm = ({value, updateText, handleAction}) => {
    return (
        <>
            <label>
                <input
                    className="bg-white shadow-md rounded px-8 pt-2 pb-2 mb-4"
                    value={value}
                    onChange={(e) => updateText(e.target.value)}
                    type="text"
                />
                <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    onClick={handleAction}>ADD+++
                </button>
            </label>
        </>
    );
};

export default NewTodoForm;