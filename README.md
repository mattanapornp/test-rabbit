# test-rabbit

Install Newman v3+: $ npm install -g newman (Requires Node v4+)

Create a new Slack incoming webhook and copy your webhook URL

Download the latest release of Newman to Slack

Run $ ./Newman-to-Slack.sh

**Examples**

Run a collection and post the summary to a Slack channel

$ ./Newman-to-Slack.sh -c mycollection.json.postman_collection -w https://hooks.slack.com/services/url

**Issues**

Permission issues? Try chmod 744 Newman-to-Slack.sh first.

Empty `````` output in Slack? Check Newman & Node versions.
