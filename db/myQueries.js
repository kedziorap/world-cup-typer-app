module.exports = {
    onePointsAdd: match => `UPDATE types as t JOIN (SELECT u.id as userId, m.id as id, u.login, m.homeTeamName, m.awayTeamName, t.home_score as home_score, t.away_score, t.points FROM matches m, users u, types t WHERE m.status = 'FINISHED' AND m.id = t.id_match AND t.typed=1 AND t.id_match=${match} AND u.id=t.id_user AND ((m.goalsHomeTeam=m.goalsAwayTeam AND t.home_score = t.away_score
    AND NOT t.home_score=m.goalsHomeTeam AND NOT t.away_score=m.goalsAwayTeam)
    OR (m.goalsHomeTeam>m.goalsAwayTeam AND t.home_score > t.away_score)
    OR (m.goalsHomeTeam<m.goalsAwayTeam AND t.home_score < t.away_score))) as z SET t.points = 1 WHERE t.id_user = z.userId AND t.id_match=z.id`,
    threePointsAdd: match => `UPDATE types as t JOIN (SELECT u.id as userId, m.id as id, u.login, m.homeTeamName, m.awayTeamName, t.home_score as home_score, t.away_score as away_score, t.points FROM matches m, users u, types t WHERE m.status = 'FINISHED' AND t.id_match=${match} AND m.id = t.id_match AND t.typed=1 AND u.id=t.id_user AND m.goalsHomeTeam=t.home_score AND m.goalsAwayTeam=t.away_score) as z SET t.points = 3 WHERE t.id_user = z.userId AND t.id_match=z.id`,
    clearPoints: match => `UPDATE types SET points=0 WHERE id_match=${match}`
}