module.exports = {
	preset:          "ts-jest",
	testEnvironment: "node",
	testPathIgnorePatterns : [
		"<rootDir>/node_modules",
		"<rootDir>/__dist__",
	],
};
