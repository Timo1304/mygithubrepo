import React from "react";
import { RepoDisplay } from "./RepoDisplay.js";
import RepoData from "./RepoData.js";

const Profiles = ({ repos, page }) => {
  const startIndex = (page - 1) * RepoDisplay;
  const selectedUsers = repos?.slice(startIndex, startIndex + RepoDisplay);

  return selectedUsers.map((repo) => (
    <div className="repo-grid">
      <RepoData repo={repo} key={repo.id} />
    </div>
  ));
};

export default Profiles;
