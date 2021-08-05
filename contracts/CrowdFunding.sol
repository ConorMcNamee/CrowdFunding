pragma solidity ^0.8.6;

contract CrowdFunding {

    enum Status{
        InProgress,
        Successful,
        Failed
    }

    struct Project{
        address ProjectOwner;
        string projectName;

        uint totalRaised;
        uint currentBalance;
        uint deadline;
        Status status;
    }

    Project[] public projects;
    uint numProjects;

    constructor() {
        numProjects = 0;
    }

    function startProject(string memory name, uint deadline) public payable {
        Project memory _project = Project(msg.sender, name, 0, 0, deadline, Status.InProgress);
        projects.push(_project);
        numProjects++;
    }

    function getAllProjects() external view returns(Project[] memory) {
        return projects;
    }

    function getNumProjects() public view returns(uint numProjects) {
        return numProjects;
    }

    function getProject(uint ProjectID) external view returns(Project memory) {
        return projects[ProjectID];
    }
}