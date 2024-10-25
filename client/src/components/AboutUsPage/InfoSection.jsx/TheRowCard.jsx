function TheRowCard() {
    return (
        <div className="TheCardOfAboutUS w-11/12 mx-auto mt-10 p-5 flex flex-col gap-8 md:flex-row md:flex-wrap">
            <div className="TheBlockOfCard p-3 rounded-md flex-1">
                <b className="block text-md"><span className="text-2xl inline-block relative top-1">01</span> / Problem Solving</b>
                <br />
                <p>Participants will be given a set of codes to correct in the fastest time possible.</p>
            </div>
            <div className="TheBlockOfCard p-3 rounded-md flex-1 TheLongCardEDIT">
                <b className="block text-md"><span className="text-2xl inline-block relative top-1">02</span> / IQ Questions</b>
                <br />
                <p>Participants will face a series of questions that require quick and accurate answers.</p>
            </div>
            <div className="TheBlockOfCard p-3 rounded-md flex-1">
                <b className="block text-md"><span className="text-2xl inline-block relative top-1">03</span> / Rubik's Cube Challenge</b>
                <br />
                <p>Individuals compete to solve the cube as quickly as possible, with teams selecting one member to complete the task.</p>
            </div>
            <div className="TheBlockOfCard p-3 rounded-md flex-1 TheLongCardEDIT">
                <b className="block text-md"><span className="text-2xl inline-block relative top-1">04</span> / Penetration Testing</b>
                <br />
                <p>There will be a device with vulnerabilities, and participants must gain complete control over it, relying on their speed in execution.</p>
            </div>
        </div>
    );
}

export default TheRowCard;
