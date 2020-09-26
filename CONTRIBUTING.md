#Contribution Guidelines

Thank you for taking the time to contribute! Your contribution will hopefully work towards improving the lives of postpartum women, and your time is greatly appreciated.

##How Can I Contribute?
There are two ways to contribute: working on an issue and submitting a pull request when complete (if you're new to submitting a pull request, [this video](https://www.youtube.com/watch?v=n5tXiZ3U4Xk&feature=youtu.be) walks you through the steps of the first PR for this app) or submitting a bug report.

This section guides you through submitting a bug report for the Postpartum Wellness App. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

Before creating bug reports, please check this list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible. Fill out the required template, the information it asks for helps us resolve issues faster.

Note: If you find a Closed issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

###Before Submitting A Bug Report
Check the debugging guide. You might be able to find the cause of the problem and fix things yourself. Most importantly, check if you can reproduce the problem in the latest version of the Postpartum Wellness App, if the problem happens when you run the Postpartum Wellness App in safe mode, and if you can get the desired behavior by changing the Postpartum Wellness App's or packages' config settings.

Perform a cursory search to see if the problem has already been reported. If it has and the issue is still open, add a comment to the existing issue instead of opening a new one.

###How Do I Submit A (Good) Bug Report?
Bugs are tracked as GitHub issues. Create an issue and provide the following information by filling in the template:

1-Explain the problem and include additional details to help maintainers reproduce the problem:

2-Use a clear and descriptive title for the issue to identify the problem.

3-Describe the exact steps that reproduce the problem in as many details as possible. For example, start by explaining how you started the Postpartum Wellness App, e.g. which command exactly you used in the terminal, or how you started the Postpartum Wellness App otherwise. When listing steps, don't just say what you did, but explain how you did it. For example, if you moved the cursor to the end of a line, explain if you used the mouse, or a keyboard shortcut or an the Postpartum Wellness App command, and if so which one.

4-Describe the behavior you observed after following the steps and point out what exactly is the problem with that behavior.

5-Explain which behavior you expected to see instead and why.

6-Include screenshots and animated GIFs which show you following the described steps and clearly demonstrate the problem. If you use the keyboard while following the steps, record the GIF with the Keybinding Resolver shown. You can use this tool to record GIFs on macOS and Windows, and this tool or this tool on Linux.

7-If you're reporting that the Postpartum Wellness App crashed, include a crash report with a stack trace from the operating system. On macOS, the crash report will be available in Console.app under "Diagnostic and usage information" > "User diagnostic reports". Include the crash report in the issue in a code block, a file attachment, or put it in a gist and provide link to that gist.
If the problem is related to performance or memory, include a CPU profile capture with your report.
If Chrome's developer tools pane is shown without you triggering it, that normally means that you have a syntax error in one of your themes or in your styles.less. Try running in Safe Mode and using a different theme or comment out the contents of your styles.less to see if that fixes the problem.

8-If the problem wasn't triggered by a specific action, describe what you were doing before the problem happened and share more information using the guidelines below.
Provide more context by answering these questions:

9-Can you reproduce the problem in safe mode? Did the problem start happening recently (e.g. after updating to a new version of the Postpartum Wellness App) or was this always a problem?

10-If the problem started happening recently, can you reproduce the problem in an older version of the Postpartum Wellness App? What's the most recent version in which the problem doesn't happen?

11-Can you reliably reproduce the issue? If not, provide details about how often the problem happens and under which conditions it normally happens.

12-If the problem is related to working with files (e.g. opening and editing files), does the problem happen for all files and projects or only some? Does the problem happen only when working with local or remote files (e.g. on network drives), with files of a specific type (e.g. only JavaScript, with large files or files with very long lines, or with files in a specific encoding? Is there anything else special about the files you are using?

13-Include details about your configuration and environment:
What's the name and version of the OS you're using?
Are you running the Postpartum Wellness App in a virtual machine? If so, which VM software are you using and which operating systems and versions are used for the host and the guest?
Which packages do you have installed? You can get that list by running apm list --installed.
Are you using local configuration files config.cson, keymap.cson, snippets.cson, styles.less and init.coffee to customize the Postpartum Wellness App? If so, provide the contents of those files, preferably in a code block or with a link to a gist.
Are you using the Postpartum Wellness App with multiple monitors? If so, can you reproduce the problem when you use a single monitor?
Which keyboard layout are you using? Are you using a US layout or some other layout?

###Suggesting Enhancements
This section guides you through submitting an enhancement suggestion for the Postpartum Wellness App, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion and find related suggestions.

Before creating enhancement suggestions, please check this list as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please include as many details as possible. Fill in the template, including the steps that you imagine you would take if the feature you're requesting existed.

###How Do I Submit A (Good) Enhancement Suggestion?
Enhancement suggestions are tracked as GitHub issues. Create an issue on that repository and provide the following information:

Use a clear and descriptive title for the issue to identify the suggestion.
Provide a step-by-step description of the suggested enhancement in as many details as possible.
Provide specific examples to demonstrate the steps. Include copy/pasteable snippets which you use in those examples, as Markdown code blocks.

Describe the current behavior and explain which behavior you expected to see instead and why.
Include screenshots and animated GIFs which help you demonstrate the steps or point out the part of the Postpartum Wellness App which the suggestion is related to. You can use this tool to record GIFs on macOS and Windows, and this tool or this tool on Linux.

Explain why this enhancement would be useful to most the Postpartum Wellness App users.

List some other applications where this enhancement exists.
Specify the name and version of the OS you're using.

##Your First Code Contribution
Unsure where to begin contributing to the Postpartum Wellness App? You can start by looking through these beginner and help-wanted issues:

Beginner issues - issues which should only require a few lines of code, and a test or two.
Help wanted issues - issues which should be a bit more involved than beginner issues.
Both issue lists are sorted by total number of comments. While not perfect, number of comments is a reasonable proxy for impact a given change will have.

If you want to read about using the Postpartum Wellness App or developing packages in the Postpartum Wellness App, the the Postpartum Wellness App Flight Manual is free and available online. You can find the source to the manual in the Postpartum Wellness App/flight-manual.the Postpartum Wellness App.io.

Local development
The Postpartum Wellness App Core and all packages can be developed locally. For instructions on how to do this, see the following sections in the the Postpartum Wellness App Flight Manual:

Hacking on the Postpartum Wellness App Core
Contributing to Official the Postpartum Wellness App Packages
Pull Requests
The process described here has several goals:

Maintain the Postpartum Wellness App's quality
Fix problems that are important to users
Engage the community in working toward the best possible the Postpartum Wellness App
Enable a sustainable system for the Postpartum Wellness App's maintainers to review contributions
Please follow these steps to have your contribution considered by the maintainers:

Follow all instructions in the template
Follow the styleguides
After you submit your pull request, verify that all status checks are passing
What if the status checks are failing?
While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

###Styleguides
Git Commit Messages
Use the present tense ("Add feature" not "Added feature")
Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
Limit the first line to 72 characters or less
Reference issues and pull requests liberally after the first line
When only changing documentation, include [ci skip] in the commit title
Consider starting the commit message with an applicable emoji:
🎨 :art: when improving the format/structure of the code
🐎 :racehorse: when improving performance
🚱 :non-potable_water: when plugging memory leaks
📝 :memo: when writing docs
🐧 :penguin: when fixing something on Linux
🍎 :apple: when fixing something on macOS
🏁 :checkered_flag: when fixing something on Windows
🐛 :bug: when fixing a bug
🔥 :fire: when removing code or files
💚 :green_heart: when fixing the CI build
✅ :white_check_mark: when adding tests
🔒 :lock: when dealing with security
⬆️ :arrow_up: when upgrading dependencies
⬇️ :arrow_down: when downgrading dependencies
👕 :shirt: when removing linter warnings
JavaScript Styleguide
All JavaScript must adhere to JavaScript Standard Style.

Prefer the object spread operator ({...anotherObj}) to Object.assign()
Inline exports with expressions whenever possible
// Use this:
export default class ClassName {

}

// Instead of:
class ClassName {

}
export default ClassName

Place requires in the following order:
Built in Node Modules (such as path)
Built in the Postpartum Wellness App and Electron Modules (such as the Postpartum Wellness App, remote)
Local Modules (using relative paths)
Place class properties in the following order:
Class methods and properties (methods starting with static)
Instance methods and properties
Avoid platform-dependent code

## Attribution

This Contribution Guideline is adapted from the [Atom Contribution Guidelines](https://github.com/atom/atom/blob/master/CONTRIBUTING.md)
