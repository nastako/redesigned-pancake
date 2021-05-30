"use strict";

function escapeHtml(html){
  /* This abomination was brought to you by https://stackoverflow.com/a/25396011/ */
  var text = document.createTextNode(html);
  var p = document.createElement('p');
  p.appendChild(text);
  return p.innerHTML;
}

function randomItem(items) {
  return items[Math.floor(items.length * Math.random())];
}

function randomBias() {
  var item = randomItem([
["Actor-observer bias", "", "The tendency for explanations of other individuals' behaviors to overemphasize the influence of their personality and underemphasize the influence of their situation (see also Fundamental attribution error), and for explanations of one's own behaviors to do the opposite (that is, to overemphasize the influence of our situation and underemphasize the influence of our own personality)."],
["Agent detection", "", "The inclination to presume the purposeful intervention of a sentient or intelligent agent."],
["Ambiguity effect", "", "The tendency to avoid options for which the probability of a favorable outcome is unknown."],
["Anchoring", "", "The tendency to rely too heavily, or “anchor”, on one trait or piece of information when making decisions (usually the first piece of information acquired on that subject)."],
["Anthropocentric thinking", "", "The tendency to use human analogies as a basis for reasoning about other, less familiar, biological phenomena."],
["Anthropomorphism", "https://en.wikipedia.org/wiki/Anthropomorphism#Psychology_of_Anthropomorphism", "The tendency to characterize animals, objects, and abstract concepts as possessing human-like traits, emotions, and intentions. The opposite bias, of not attributing feelings or thoughts to another person, is dehumanised perception, a type of objectification."],
["Attentional bias", "", "The tendency of perception to be affected by recurring thoughts."],
["Attribute substitution", "", "Occurs when a judgment has to be made (of a target attribute) that is computationally complex, and instead a more easily calculated heuristic attribute is substituted. This substitution is thought of as taking place in the automatic intuitive judgment system, rather than the more self-aware reflective system."],
["Authority bias", "", "The tendency to attribute greater accuracy to the opinion of an authority figure (unrelated to its content) and be more influenced by that opinion."],
["Automation bias", "", "The tendency to depend excessively on automated systems which can lead to erroneous automated information overriding correct decisions."],
["Availability cascade", "", "A self-reinforcing process in which a collective belief gains more and more plausibility through its increasing repetition in public discourse (or “repeat something long enough and it will become true”)."],
["Availability heuristic", "", "The tendency to overestimate the likelihood of events with greater “availability” in memory, which can be influenced by how recent the memories are or how unusual or emotionally charged they may be."],
["Backfire effect", "", "The reaction to disconfirming evidence by strengthening one's previous beliefs. Note: the existence of this bias as a widespread phenomenon has been disputed in empirical studies."],
["Bandwagon effect", "", "The tendency to do (or believe) things because many other people do (or believe) the same. Related to groupthink and herd behavior."],
["Barnum effect", "", "The observation that individuals will give high accuracy ratings to descriptions of their personality that supposedly are tailored specifically for them, but are in fact vague and general enough to apply to a wide range of people. This effect can provide a partial explanation for the widespread acceptance of some beliefs and practices, such as astrology, fortune telling, graphology, and some types of personality tests."],
["Base rate fallacy", "", "The tendency to ignore general information and focus on information only pertaining to the specific case, even when the general information is more important."],
["Belief bias", "", "An effect where someone's evaluation of the logical strength of an argument is biased by the believability of the conclusion."],
["Ben Franklin effect", "", "A person who has performed a favor for someone is more likely to do another favor for that person than they would be if they had received a favor from that person."],
["Berkson's paradox", "", "The tendency to misinterpret statistical experiments involving conditional probabilities."],
["Bias blind spot", "", "The tendency to see oneself as less biased than other people, or to be able to identify more cognitive biases in others than in oneself."],
["Bizarreness effect", "", "Bizarre material is better remembered than common material."],
["Cheerleader effect", "", "The tendency for people to appear more attractive in a group than in isolation."],
["Choice-supportive bias", "", "The tendency to remember one's choices as better than they actually were."],
["Clustering illusion", "", "The tendency to overestimate the importance of small runs, streaks, or clusters in large samples of random data (that is, seeing phantom patterns)."],
["Compassion fade", "", "The predisposition to behave more compassionately towards a small number of identifiable victims than to a large number of anonymous ones."],
["Confirmation bias", "", "The tendency to search for, interpret, focus on and remember information in a way that confirms one's preconceptions."],
["Congruence bias", "", "The tendency to test hypotheses exclusively through direct testing, instead of testing possible alternative hypotheses."],
["Conjunction fallacy", "", "The tendency to assume that specific conditions are more probable than a more general version of those same conditions. For example, subjects in one experiment perceived the probability of a woman being both a bank teller and a feminist as more likely than the probability of her being a bank teller."],
["Conservatism bias", "https://en.wikipedia.org/wiki/Conservatism_(belief_revision)", "The tendency to revise one's belief insufficiently when presented with new evidence."],
["Consistency bias", "https://en.wikipedia.org/wiki/List_of_cognitive_biases#Consistency%20bias", "Incorrectly remembering one's past attitudes and behavior as resembling present attitudes and behavior."],
["Context effect", "https://en.wikipedia.org/wiki/Cue-dependent_forgetting", "That cognition and memory are dependent on context, such that out-of-context memories are more difficult to retrieve than in-context memories (e.g., recall time and accuracy for a work-related memory will be lower at home, and vice versa)."],
["Continued influence effect", "", "The tendency to believe previously learned misinformation even after it has been corrected. Misinformation can still influence inferences one generates after a correction has occurred. cf. Backfire effect"],
["Contrast effect", "", "The enhancement or reduction of a certain stimulus' perception when compared with a recently observed, contrasting object."],
["Courtesy bias", "", "The tendency to give an opinion that is more socially correct than one's true opinion, so as to avoid offending anyone."],
["Cross-race effect", "", "The tendency for people of one race to have difficulty identifying members of a race other than their own."],
["Cryptomnesia", "", "A form of misattribution where a memory is mistaken for imagination, because there is no subjective experience of it being a memory."],
["Curse of knowledge", "", "When better-informed people find it extremely difficult to think about problems from the perspective of lesser-informed people."],
["Declinism", "", "The predisposition to view the past favorably (rosy retrospection) and future negatively."],
["Decoy effect", "", "Preferences for either option A or B change in favor of option B when option C is presented, which is completely dominated by option B (inferior in all respects) and partially dominated by option A."],
["Default effect", "", "When given a choice between several options, the tendency to favor the default one."],
["Defensive attribution hypothesis", "", "Attributing more blame to a harm-doer as the outcome becomes more severe or as personal or situational similarity to the victim increases."],
["Denomination effect", "", "The tendency to spend more money when it is denominated in small amounts (e.g., coins) rather than large amounts (e.g., bills)."],
["Disposition effect", "", "The tendency to sell an asset that has accumulated in value and resist selling an asset that has declined in value."],
["Distinction bias", "", "The tendency to view two options as more dissimilar when evaluating them simultaneously than when evaluating them separately."],
["Dread aversion", "https://en.wikipedia.org/wiki/Risk_aversion_(psychology)", "Just as losses yield double the emotional impact of gains, dread yields double the emotional impact of savouring."],
["Dunning–Kruger effect", "", "The tendency for unskilled individuals to overestimate their own ability and the tendency for experts to underestimate their own ability."],
["Duration neglect", "", "The neglect of the duration of an episode in determining its value."],
["Egocentric bias", "", "Occurs when people claim more responsibility for themselves for the results of a joint action than an outside observer would credit them with."],
["Egocentric bias", "", "Recalling the past in a self-serving manner, e.g., remembering one's exam grades as being better than they were, or remembering a caught fish as bigger than it really was."],
["Empathy gap", "", "The tendency to underestimate the influence or strength of feelings, in either oneself or others."],
["End-of-history illusion", "", "The age-independent belief that one will change less in the future than one has in the past."],
["Endowment effect", "", "The tendency for people to demand much more to give up an object than they would be willing to pay to acquire it."],
["Escalation of commitment", "", "The phenomenon where people justify increased investment in a decision, based on the cumulative prior investment, despite new evidence suggesting that the decision was probably wrong. Also known as the sunk cost fallacy."],
["Exaggerated expectation", "https://en.wikipedia.org/wiki/List_of_cognitive_biases#Exaggerated_expectation", "The tendency to expect or predict more extreme outcomes than those outcomes that actually happen."],
["Expectation bias", "", "The tendency for experimenters to believe, certify, and publish data that agree with their expectations for the outcome of an experiment, and to disbelieve, discard, or downgrade the corresponding weightings for data that appear to conflict with those expectations."],
["Extrinsic incentives bias", "", "An exception to the fundamental attribution error, when people view others as having (situational) extrinsic motivations and (dispositional) intrinsic motivations for oneself"],
["Fading affect bias", "", "A bias in which the emotion associated with unpleasant memories fades more quickly than the emotion associated with positive events."],
["False consensus effect", "", "The tendency for people to overestimate the degree to which others agree with them."],
["False memory", "", "A form of misattribution where imagination is mistaken for a memory."],
["False uniqueness bias", "", "The tendency of people to see their projects and themselves as more singular than they actually are."],
["Forer effect", "", "The observation that individuals will give high accuracy ratings to descriptions of their personality that supposedly are tailored specifically for them, but are in fact vague and general enough to apply to a wide range of people. This effect can provide a partial explanation for the widespread acceptance of some beliefs and practices, such as astrology, fortune telling, graphology, and some types of personality tests."],
["Form function attribution bias", "https://en.wikipedia.org/wiki/List_of_cognitive_biases#Form%20function%20attribution%20bias", "In human–robot interaction, the tendency of people to make systematic errors when interacting with a robot. People may base their expectations and perceptions of a robot on its appearance (form) and attribute functions which do not necessarily mirror the true functions of the robot."],
["Framing effect", "https://en.wikipedia.org/wiki/Framing_effect_(psychology)", "Drawing different conclusions from the same information, depending on how that information is presented."],
["Frequency illusion", "", "The frequency illusion is that once something has been noticed then every instance of that thing is noticed, leading to the belief it has a high frequency of occurrence (a form of selection bias). The Baader–Meinhof phenomenon is the illusion where something that has recently come to one's attention suddenly seems to appear with improbable frequency shortly afterwards.  It was named after an incidence of frequency illusion in which the Baader–Meinhof Group was mentioned."],
["Functional fixedness", "", "Limits a person to using an object only in the way it is traditionally used."],
["Fundamental attribution error", "", "The tendency for people to over-emphasize personality-based explanations for behaviors observed in others while under-emphasizing the role and power of situational influences on the same behavior (see also actor-observer bias, group attribution error, positivity effect, and negativity effect)."],
["Gambler's fallacy", "", "The tendency to think that future probabilities are altered by past events, when in reality they are unchanged. The fallacy arises from an erroneous conceptualization of the law of large numbers. For example, “I've flipped heads with this coin five times consecutively, so the chance of tails coming out on the sixth flip is much greater than heads.”"],
["Gender bias", "", "A widely held set of implicit biases that discriminate against a gender. For example, the assumption that women are less suited to jobs requiring high intellectual ability. Or the assumption that people or animals are male in the absence of any indicators of gender."],
["Generation effect", "", "That self-generated information is remembered best. For instance, people are better able to recall memories of statements that they have generated than similar statements generated by others."],
["Google effect", "", "The tendency to forget information that can be found readily online by using Internet search engines."],
["Group attribution error", "", "The biased belief that the characteristics of an individual group member are reflective of the group as a whole or the tendency to assume that group decision outcomes reflect the preferences of group members, even when information is available that clearly suggests otherwise."],
["Groupthink", "", "The psychological phenomenon that occurs within a group of people in which the desire for harmony or conformity in the group results in an irrational or dysfunctional decision-making outcome. Group members try to minimize conflict and reach a consensus decision without critical evaluation of alternative viewpoints by actively suppressing dissenting viewpoints, and by isolating themselves from outside influences."],
["Halo effect", "", "The tendency for a person's positive or negative traits to “spill over” from one personality area to another in others' perceptions of them (see also physical attractiveness stereotype)."],
["Hard–easy effect", "", "The tendency to overestimate one's ability to accomplish hard tasks, and underestimate one's ability to accomplish easy tasks"],
["Hindsight bias", "", "Sometimes called the “I-knew-it-all-along” effect, the tendency to see past events as being predictable at the time those events happened."],
["Hostile attribution bias", "", "The “hostile attribution bias” is the tendency to interpret others' behaviors as having hostile intent, even when the behavior is ambiguous or benign."],
["Hot-hand fallacy", "", "The “hot-hand fallacy” (also known as the “hot hand phenomenon” or “hot hand”) is the belief that a person who has experienced success with a random event has a greater chance of further success in additional attempts."],
["Humor effect", "https://en.wikipedia.org/wiki/List_of_cognitive_biases#Humor%20effect", "That humorous items are more easily remembered than non-humorous ones, which might be explained by the distinctiveness of humor, the increased cognitive processing time to understand the humor, or the emotional arousal caused by the humor."],
["Hyperbolic discounting", "", "Discounting is the tendency for people to have a stronger preference for more immediate payoffs relative to later payoffs. Hyperbolic discounting leads to choices that are inconsistent over time – people make choices today that their future selves would prefer not to have made, despite using the same reasoning. Also known as current moment bias, present-bias, and related to Dynamic inconsistency. A good example of this: a study showed that when making food choices for the coming week, 74% of participants chose fruit, whereas when the food choice was for the current day, 70% chose chocolate."],
["IKEA effect", "", "The tendency for people to place a disproportionately high value on objects that they partially assembled themselves, such as furniture from IKEA, regardless of the quality of the end product."],
["Illicit transference", "", "Occurs when a term in the distributive (referring to every member of a class) and collective (referring to the class itself as a whole) sense are treated as equivalent. The two variants of this fallacy are the fallacy of composition and the fallacy of division."],
["Illusion of asymmetric insight", "", "People perceive their knowledge of their peers to surpass their peers' knowledge of them."],
["Illusion of control", "", "The tendency to overestimate one's degree of influence over other external events."],
["Illusion of transparency", "", "The tendency for people to overestimate the degree to which their personal mental state is known by others, and to overestimate how well they understand others' personal mental states."],
["Illusion of validity", "", "Overestimating the accuracy of one's judgments, especially when available information is consistent or inter-correlated."],
["Illusory correlation", "", "Inaccurately perceiving a relationship between two unrelated events."],
["Illusory superiority", "", "Overestimating one's desirable qualities, and underestimating undesirable qualities, relative to other people. (Also known as “Lake Wobegon effect”, “better-than-average effect”, or “superiority bias”.)"],
["Illusory truth effect", "", "A tendency to believe that a statement is true if it is easier to process, or if it has been stated multiple times, regardless of its actual veracity. These are specific cases of truthiness."],
["Impact bias", "", "The tendency to overestimate the length or the intensity of the impact of future feeling states."],
["Implicit association", "https://en.wikipedia.org/wiki/Implicit_association_test", "The speed with which people can match words depends on how closely they are associated."],
["Information bias", "https://en.wikipedia.org/wiki/Information_bias_(psychology)", "The tendency to seek information even when it cannot affect action."],
["Ingroup bias", "", "The tendency for people to give preferential treatment to others they perceive to be members of their own groups."],
["Insensitivity to sample size", "", "The tendency to under-expect variation in small samples."],
["Intentionality bias", "https://en.wikipedia.org/wiki/List_of_cognitive_biases#Intentionality%20bias", "Tendency to judge human action to be intentional rather than accidental."],
["Interoceptive bias", "https://en.wikipedia.org/wiki/List_of_cognitive_biases#Interoceptive_bias", "The tendency for sensory input about the body itself to affect one's judgement about external, unrelated circumstances. (As for example, in parole judges who are more lenient when fed and rested.) "],
["Just-world hypothesis", "", "The tendency for people to want to believe that the world is fundamentally just, causing them to rationalize an otherwise inexplicable injustice as deserved by the victim(s)."],
["Law of the instrument", "", "An over-reliance on a familiar tool or methods, ignoring or under-valuing alternative approaches. “If all you have is a hammer, everything looks like a nail.”"],
["Less-is-better effect", "", "The tendency to prefer a smaller set to a larger set judged separately, but not jointly."],
["Leveling and sharpening", "", "Memory distortions introduced by the loss of details in a recollection over time, often concurrent with sharpening or selective recollection of certain details that take on exaggerated significance in relation to the details or aspects of the experience lost through leveling. Both biases may be reinforced over time, and by repeated recollection or re-telling of a memory."],
["Levels-of-processing effect", "", "That different methods of encoding information into memory have different levels of effectiveness."],
["Loss aversion", "", "The perceived disutility of giving up an object is greater than the utility associated with acquiring it. (see also Sunk cost effects and endowment effect)."],
["Mere exposure effect", "", "The tendency to express undue liking for things merely because of familiarity with them."],
["Misinformation effect", "", "Memory becoming less accurate because of interference from post-event information."],
["Modality effect", "", "That memory recall is higher for the last items of a list when the list items were received via speech than when they were received through writing."],
["Money illusion", "", "The tendency to concentrate on the nominal value (face value) of money rather than its value in terms of purchasing power."],
["Mood-congruent memory bias", "https://en.wikipedia.org/wiki/State-dependent_memory", "The improved recall of information congruent with one's current mood."],
["Moral credential effect", "", "Occurs when someone who does something good gives themselves permission to be less good in the future."],
["Moral luck", "", "The tendency for people to ascribe greater or lesser moral standing based on the outcome of an event."],
["Naïve cynicism", "", "Expecting more egocentric bias in others than in oneself."],
["Naïve realism", "https://en.wikipedia.org/wiki/Na%C3%AFve_realism_(psychology)", "The belief that we see reality as it really is – objectively and without bias; that the facts are plain for all to see; that rational people will agree with us; and that those who don't are either uninformed, lazy, irrational, or biased."],
["Negativity bias", "", "Psychological phenomenon by which humans have a greater recall of unpleasant memories compared with positive memories. (see also actor-observer bias, group attribution error, positivity effect, and negativity effect)."],
["Neglect of probability", "", "The tendency to completely disregard probability when making a decision under uncertainty."],
["Next-in-line effect", "", "When taking turns speaking in a group using a predetermined order (e.g. going clockwise around a room, taking numbers, etc.) people tend to have diminished recall for the words of the person who spoke immediately before them."],
["Non-adaptive choice switching", "https://en.wikipedia.org/wiki/List_of_cognitive_biases#Non-adaptive%20choice%20switching", "After experiencing a bad outcome with a decision problem, the tendency to avoid the choice previously made when faced with the same decision problem again, even though the choice was optimal. Also known as “once bitten, twice shy” or “hot stove effect”."],
["Normalcy bias", "", "The refusal to plan for, or react to, a disaster which has never happened before."],
["Not invented here", "", "Aversion to contact with or use of products, research, standards, or knowledge developed outside a group. Related to IKEA effect."],
["Observer-expectancy effect", "", "When a researcher expects a given result and therefore unconsciously manipulates an experiment or misinterprets data in order to find it (see also subject-expectancy effect)."],
["Omission bias", "", "The tendency to judge harmful actions (commissions) as worse, or less moral, than equally harmful inactions (omissions)."],
["Optimism bias", "", "The tendency to be over-optimistic, underestimating greatly the probability of undesirable outcomes and overestimating favorable and pleasing outcomes (see also wishful thinking, valence effect, positive outcome bias)."],
["Ostrich effect", "", "Ignoring an obvious (negative) situation."],
["Outcome bias", "", "The tendency to judge a decision by its eventual outcome instead of based on the quality of the decision at the time it was made."],
["Outgroup homogeneity bias", "", "Individuals see members of their own group as being relatively more varied than members of other groups."],
["Overconfidence effect", "", "Excessive confidence in one's own answers to questions. For example, for certain types of questions, answers that people rate as “99% certain” turn out to be wrong 40% of the time."],
["Pareidolia", "", "A vague and random stimulus (often an image or sound) is perceived as significant, e.g., seeing images of animals or faces in clouds, the man in the moon, and hearing non-existent hidden messages on records played in reverse."],
["Parkinson's law of triviality", "", "The tendency to give disproportionate weight to trivial issues. Also known as bikeshedding, this bias explains why an organization may avoid specialized or complex subjects, such as the design of a nuclear reactor, and instead focus on something easy to grasp or rewarding to the average participant, such as the design of an adjacent bike shed."],
["Part-list cueing effect", "", "That being shown some items from a list and later retrieving one item causes it to become harder to retrieve the other items."],
["Peak–end rule", "", "That people seem to perceive not the sum of an experience but the average of how it was at its peak (e.g., pleasant or unpleasant) and how it ended."],
["Pessimism bias", "", "The tendency for some people, especially those suffering from depression, to overestimate the likelihood of negative things happening to them."],
["Picture superiority effect", "", "The notion that concepts that are learned by viewing pictures are more easily and frequently recalled than are concepts that are learned by viewing their written word form counterparts."],
["Plan continuation bias", "", "Failure to recognize that the original plan of action is no longer appropriate for a changing situation or for a situation that is different than anticipated."],
["Planning fallacy", "", "The tendency to underestimate one's own task-completion times."],
["Plant blindness", "", "The tendency to ignore plants in their environment and a failure to recognize and appreciate the utility of plants to life on earth."],
["Positivity effect", "https://en.wikipedia.org/wiki/Socioemotional_selectivity_theory", "That older adults favor positive over negative information in their memories."],
["Present bias", "", "The tendency of people to give stronger weight to payoffs that are closer to the present time when considering trade-offs between two future moments."],
["Probability matching", "", "Sub-optimal matching of the probability of choices with the probability of reward in a stochastic context."],
["Pro-innovation bias", "", "The tendency to have an excessive optimism towards an invention or innovation's usefulness throughout society, while often failing to identify its limitations and weaknesses."],
["Projection bias", "", "The tendency to overestimate how much our future selves share one's current preferences, thoughts and values, thus leading to sub-optimal choices."],
["Proportionality bias", "", "Our innate tendency to assume that big events have big causes, may also explain our tendency to accept conspiracy theories."],
["Pseudocertainty effect", "", "The tendency to make risk-averse choices if the expected outcome is positive, but make risk-seeking choices to avoid negative outcomes."],
["Puritanical bias", "", "Refers to the tendency to attribute cause of an undesirable outcome or wrongdoing by an individual to a moral deficiency or lack of self-control rather than taking into account the impact of broader societal determinants ."],
["Pygmalion effect", "", "The phenomenon whereby others' expectations of a target person affect the target person's performance."],
["Reactance", "https://en.wikipedia.org/wiki/Reactance_(psychology)", "The urge to do the opposite of what someone wants you to do out of a need to resist a perceived attempt to constrain your freedom of choice (see also Reverse psychology)."],
["Reactive devaluation", "", "Devaluing proposals only because they purportedly originated with an adversary."],
["Recency illusion", "", "The illusion that a phenomenon one has noticed only recently is itself recent. Often used to refer to linguistic phenomena; the illusion that a word or language usage that one has noticed only recently is an innovation when it is, in fact, long-established (see also frequency illusion). Also Recency bias is a cognitive bias that favors recent events over historic ones. A memory bias, recency bias gives “greater importance to the most recent event”, such as the final lawyer's closing argument a jury hears before being dismissed to deliberate."],
["Reminiscence bump", "", "The recalling of more personal events from adolescence and early adulthood than personal events from other lifetime periods."],
["Restraint bias", "", "The tendency to overestimate one's ability to show restraint in the face of temptation."],
["Rhyme as reason effect", "", "Rhyming statements are perceived as more truthful."],
["Risk compensation", "", "The tendency to take greater risks when perceived safety increases."],
["Salience bias", "", "The tendency to focus on items that are more prominent or emotionally striking and ignore those that are unremarkable, even though this difference is often irrelevant by objective standards."],
["Scope insensitivity", "https://en.wikipedia.org/wiki/Scope_neglect", "The tendency to be insensitive to the size of a problem when evaluating it. For example, being willing to pay as much to save 2,000 children or 20,000 children"],
["Selection bias", "", "The tendency to notice something more when something causes us to be more aware of it, such as when we buy a car, we tend to notice similar cars more often than we did before. They are not suddenly more common – we just are noticing them more. Also called the Observational Selection Bias."],
["Selective perception", "", "The tendency for expectations to affect perception."],
["Self-relevance effect", "", "That memories relating to the self are better recalled than similar information relating to others."],
["Self-serving bias", "", "The tendency to claim more responsibility for successes than failures. It may also manifest itself as a tendency for people to evaluate ambiguous information in a way beneficial to their interests (see also group-serving bias)."],
["Semmelweis reflex", "", "The tendency to reject new evidence that contradicts a paradigm."],
["Serial position effect", "", "That items near the end of a sequence are the easiest to recall, followed by the items at the beginning of a sequence; items in the middle are the least likely to be remembered."],
["Sexual overperception bias / Sexual underperception bias", "", "The tendency to over-/underestimate sexual interest of another person in oneself."],
["Shared information bias", "", "Known as the tendency for group members to spend more time and energy discussing information that all members are already familiar with (i.e., shared information), and less time and energy discussing information that only some members are aware of (i.e., unshared information)."],
["Social comparison bias", "", "The tendency, when making decisions, to favor potential candidates who don't compete with one's own particular strengths."],
["Social desirability bias", "", "The tendency to over-report socially desirable characteristics or behaviors in oneself and under-report socially undesirable characteristics or behaviors. See also: § Courtesy bias."],
["Source confusion", "https://en.wikipedia.org/wiki/Misattribution_of_memory", "Confusing episodic memories with other information, creating distorted memories."],
["Spacing effect", "", "That information is better recalled if exposure to it is repeated over a long span of time rather than a short one."],
["Spotlight effect", "", "The tendency to overestimate the amount that other people notice your appearance or behavior."],
["Status quo bias", "", "The tendency to like things to stay relatively the same (see also loss aversion, endowment effect, and system justification)."],
["Stereotyping", "", "Expecting a member of a group to have certain characteristics without having actual information about that individual."],
["Subadditivity effect", "", "The tendency to judge the probability of the whole to be less than the probabilities of the parts."],
["Subjective validation", "", "Perception that something is true if a subject's belief demands it to be true. Also assigns perceived connections between coincidences."],
["Suffix effect", "", "Diminishment of the recency effect because a sound item is appended to the list that the subject is not required to recall."],
["Suggestibility", "https://en.wikipedia.org/wiki/Suggestibility#External", "A form of misattribution where ideas suggested by a questioner are mistaken for memory."],
["Surrogation", "", "Losing sight of the strategic construct that a measure is intended to represent, and subsequently acting as though the measure is the construct of interest."],
["Survivorship bias", "", "Concentrating on the people or things that “survived” some process and inadvertently overlooking those that didn't because of their lack of visibility."],
["Systematic bias", "https://en.wikipedia.org/wiki/Observational_error", "Judgment that arises when targets of differentiating judgment become subject to effects of regression that are not equivalent."],
["System justification", "", "The tendency to defend and bolster the status quo. Existing social, economic, and political arrangements tend to be preferred, and alternatives disparaged, sometimes even at the expense of individual and collective self-interest. (See also status quo bias.)"],
["Tachypsychia", "", "When time perceived by the individual either lengthens, making events appear to slow down, or contracts."],
["Telescoping effect", "", "The tendency to displace recent events backwards in time and remote events forward in time, so that recent events appear more remote, and remote events, more recent."],
["Testing effect", "", "The fact that you more easily remember information you have read by rewriting it instead of rereading it."],
["Third-person effect", "", "A hypothesized tendency to believe that mass communicated media messages have a greater effect on others than on themselves. As of 2020, the third-person effect has yet to be reliably demonstrated in a scientific context."],
["Time-saving bias", "", "Underestimations of the time that could be saved (or lost) when increasing (or decreasing) from a relatively low speed and overestimations of the time that could be saved (or lost) when increasing (or decreasing) from a relatively high speed."],
["Tip of the tongue phenomenon", "https://en.wikipedia.org/wiki/Tip_of_the_tongue", "When a subject is able to recall parts of an item, or related information, but is frustratingly unable to recall the whole item. This is thought to be an instance of “blocking” where multiple similar memories are being recalled and interfere with each other."],
["Trait ascription bias", "", "The tendency for people to view themselves as relatively variable in terms of personality, behavior, and mood while viewing others as much more predictable."],
["Ultimate attribution error", "", "Similar to the fundamental attribution error, in this error a person is likely to make an internal attribution to an entire group instead of the individuals within the group."],
["Unconscious bias", "https://en.wikipedia.org/wiki/Implicit_stereotype", "Also known as implicit biases, are the underlying attitudes and stereotypes that people unconsciously attribute to another person or group of people that affect how they understand and engage with them. Many researchers suggest that unconscious bias occurs automatically as the brain makes quick judgments based on past experiences and background."],
["Unit bias", "https://en.wikipedia.org/wiki/List_of_cognitive_biases#Unit bias", "The standard suggested amount of consumption (e.g., food serving size) is perceived to be appropriate, and a person would consume it all even if it is too much for this particular person."],
["Verbatim effect", "https://en.wikipedia.org/wiki/List_of_cognitive_biases#Verbatim effect", "That the “gist” of what someone has said is better remembered than the verbatim wording. This is because memories are representations, not exact copies."],
["von Restorff effect", "https://en.wikipedia.org/wiki/Von_Restorff_effect", "That an item that sticks out is more likely to be remembered than other items."],
["Weber–Fechner law", "", "Difficulty in comparing small differences in large quantities."],
["Well travelled road effect", "", "Underestimation of the duration taken to traverse oft-traveled routes and overestimation of the duration taken to traverse less familiar routes."],
["Women are wonderful effect", "", "A tendency to associate more positive attributes with women than with men."],
["Worse-than-average effect", "", "A tendency to believe ourselves to be worse than others at tasks which are difficult."],
["Zeigarnik effect", "", "That uncompleted or interrupted tasks are remembered better than completed ones. "],
["Zero-risk bias", "", "Preference for reducing a small risk to zero over a greater reduction in a larger risk."],
["Zero-sum bias", "https://en.wikipedia.org/wiki/Zero-sum_thinking", "A bias whereby a situation is incorrectly perceived to be like a zero-sum game (i.e., one person gains at the expense of another)."],
  ]);
  if (item[1] == "") {
    item[1] = "https://en.wikipedia.org/wiki/" + item[0].replaceAll(" ", "_");
  }
  return item;
}

function submitClicked() {
  var actualThing = escapeHtml(document.getElementById("saleitem").value) || "unnamed stuff";
  var username = escapeHtml(makeUsername());
  var description = escapeHtml(makeDescription());
  var datetime = escapeHtml(makeDatetime());
  var template = makeTemplate();

  var fullPhrase = template(username, description, datetime);

  document.getElementById("response").innerHTML = `
    <div class="alert alert-primary mt-4 pb-0" role="alert">
      <h4 class="alert-heading">Sale of &ldquo;${actualThing}&rdquo;</h4>
      <p>${fullPhrase}</p>
    </div>
  `;

  document.getElementById("saleitem").value = "";
}

function loadRandomBias() {
  var bias = randomBias();
  document.getElementById("bias-name").innerHTML = escapeHtml(bias[0]);
  document.getElementById("bias-content").innerHTML = escapeHtml(bias[2]);
  document.getElementById("bias-wikilink").href = bias[1];
}

loadRandomBias();
